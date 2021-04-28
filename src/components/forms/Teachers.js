import React, { Component, useEffect, useState } from 'react'
import { BackTexture } from '../ui/BackTextureFeed';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Select } from '../ui/inputs/Select';
import { MultiSelect } from '../ui/inputs/MultiSelect'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { useForm } from '../../hooks/useForm';
import { formsStartCreate, formsStartCreateTeacher, formsStartGetCampus, formStartUpdate } from '../../actions/forms';
import { useDispatch, useSelector } from 'react-redux';
import { useError } from '../../hooks/useError';
import { usePanel } from '../../hooks/usePanel';
import { types } from '../../types/types';


export const Teachers = () => {
    const dispatch = useDispatch()
    const { campus, teachers, active } = useSelector(state => state.forms)
    useError()
    usePanel(teachers, "name", "id_teacher", types.formsGetTeachers)
    const [formValues, handleInputChange, reset, setValue] = useForm({ name: "", surname_f: "", surname_m: "", rfc: "", mobile_number: "", id_campus: "", })
    const { name, surname_f, surname_m, rfc, mobile_number, id_campus } = formValues;

    useEffect(() => { active && setValue({ ...active }) }, [active])

    useEffect(() => {
        dispatch(formsStartGetCampus())
    }, [dispatch])

    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="tea__personal form_section">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs ">
                                            <Input nameInput="name" valueInput={name} handleInputChange={handleInputChange} contentClassName="tea__inputs-name" label="Nombre(s)" />
                                            <Input nameInput="surname_f" valueInput={surname_f} handleInputChange={handleInputChange} contentClassName="tea__inputs-father" label="Apellido paterno" />
                                            <Input nameInput="surname_m" valueInput={surname_m} handleInputChange={handleInputChange} contentClassName="tea__inputs-mother" label="Apellido materno" />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Input nameInput="mobile_number" valueInput={mobile_number} handleInputChange={handleInputChange} contentClassName="tea__inputs-num1" label="Numero de télefono" />
                                            <Input nameInput="rfc" valueInput={rfc} handleInputChange={handleInputChange} contentClassName="tea__inputs-RFC" label="RFC" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tea__scholar form_section">
                                <p>Información escolar</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs form__special">
                                            <Select
                                                contentClassName="tea__inputs-campus"
                                                label="Campus"
                                                options={campus}
                                                nameSelect="id_campus"
                                                valueSelect={id_campus}
                                                handleInputChange={handleInputChange}
                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
            <Buttons
                reset={reset}
                formValues={formValues}
                action={active ? formStartUpdate : formsStartCreate}
                text="Maestro"
                endpoint="teachers"
            />

        </div>
    )
}

