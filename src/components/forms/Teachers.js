import React, { Component, useEffect, useState } from 'react'
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Select } from '../ui/inputs/Select';
import { MultiSelect } from '../ui/inputs/MultiSelect'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { useForm } from '../../hooks/useForm';
import { formsStartCreateTeacher, formsStartGetCampus } from '../../actions/forms';
import { useDispatch, useSelector } from 'react-redux';


export const Teachers = () => {
    const dispatch = useDispatch()
    const { campus } = useSelector(state => state.forms)
    const [formValues, handleInputChange, reset] = useForm({
        name: "", surname_f: "", surname_m: "", rfc: "", mobile_number: "", id_campus: campus[0].id_campus,
    })

    const { name, surname_f, surname_m, rfc, mobile_number, id_campus } = formValues;

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
                                            // multiple="multiple"
                                            />
                                            {/* <MultiSelect
                                                contentClassName="tea__inputs-campus" label="Campus"
                                            /> */}

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
                action={formsStartCreateTeacher}
            />

        </div>
    )
}

