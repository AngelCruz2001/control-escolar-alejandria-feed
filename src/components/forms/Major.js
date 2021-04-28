import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BackTexture } from '../ui/BackTextureFeed'
import { Input } from '../ui/inputs/Input'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { useForm } from '../../hooks/useForm'
import { formsStartCreateMajor } from '../../actions/forms'
import { useError } from '../../hooks/useError'
import { usePanel } from '../../hooks/usePanel';
import { types } from '../../types/types';

export const Major = () => {
    const { majors, errors, active } = useSelector(state => state.forms)

    useError();

    usePanel(majors, "major_name", "id_major", types.formsGetMajors)

    useEffect(() => {
        console.log(document.getElementsByClassName("input__error"));
        [...document.getElementsByClassName("input__error")].map(element => (element.classList.remove("input__error")));
        errors.map((errorBackend, i) => (document.getElementsByName(errorBackend)[0].className += (" input__error")))
    }, [errors])

    const [formValues, handleInputChange, reset, setValue] = useForm({ major_name: '' });
    const { major_name } = formValues;

    useEffect(() => { active && setValue({ ...active }) }, [active])

    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf major__container-content-inf">
                    <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="major__personal form_section">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs major__special">
                                            <Input contentClassName="major__inputs-major"
                                                label="Nombre de la carrera"
                                                nameInput="major_name"
                                                valueInput={major_name}
                                                handleInputChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded 
                    data={majors}
                    name="major_name"
                    id="id_major"
                />
            </div>
            <Buttons
                formValues={formValues}
                reset={reset}
                action={formsStartCreateMajor}
            />

        </div>
    )
}
