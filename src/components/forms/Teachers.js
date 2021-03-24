import React, { useEffect } from 'react'
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Select } from '../ui/inputs/Select';
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { useForm } from '../../hooks/useForm';
import { formsStartCreateTeacher, formsStartGetCampus } from '../../actions/forms';
import { useDispatch, useSelector } from 'react-redux';

export const Teachers = () => {
    const dispatch = useDispatch()
    const { campus } = useSelector(state => state.forms)
    const [formValues, handleInputChange, reset] = useForm({
        name: "1na11me",
        surnameF: "s1u1r1name",
        surnameM: "s1u1r1name",
        rfc: "rf1c121",
        mobile_number: "6611125",
        email: "emmail1234@gmail.com",
        id_campus: 1,
    })

    const { name,
        surnameF,
        surnameM,
        rfc,
        mobile_number,
        email } = formValues;

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
                                        <div className="form__inputs">
                                            <Input nameInput="name" valueInput={name} handleInputChange={handleInputChange} contentClassName="tea__inputs-name" label="Nombre(s)" />
                                            <Input nameInput="surnameF" valueInput={surnameF} handleInputChange={handleInputChange} contentClassName="tea__inputs-father" label="Apellido paterno" />
                                            <Input nameInput="surnameM" valueInput={surnameM} handleInputChange={handleInputChange} contentClassName="tea__inputs-mother" label="Apellido materno" />
                                            <Input nameInput="rfc" valueInput={rfc} handleInputChange={handleInputChange} contentClassName="tea__inputs-RFC" label="RFC" />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Input nameInput="mobile_number" valueInput={mobile_number} handleInputChange={handleInputChange} contentClassName="tea__inputs-num1" label="Numero de télefono" />
                                            <Input nameInput="email" valueInput={email} handleInputChange={handleInputChange} contentClassName="tea__inputs-email" label="Correo electrónico" placeholder="ejemplo@ejemplo.com" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tea__scholar form_section">
                                <p>Información escolar</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs form__special">
                                            <Select contentClassName="tea__inputs-campus" label="Campus" options={campus} />
                                            {/* <Select contentClassName="tea__inputs-subImp" label="Materias que puede impartir" /> */}
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

