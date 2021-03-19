import React from 'react'
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Select } from '../ui/inputs/Select';
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'

export const Teachers = () => {
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
                                            <Input contentClassName="tea__inputs-name" label="Nombre(s)" />
                                            <Input contentClassName="tea__inputs-father" label="Apellido paterno" />
                                            <Input contentClassName="tea__inputs-mother" label="Apellido materno" />
                                            <Input contentClassName="tea__inputs-RFC" label="RFC" />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Input contentClassName="tea__inputs-CURP" label="CURP" />
                                            <Input contentClassName="tea__inputs-num1" label="Numero de télefono" />
                                            <Input contentClassName="tea__inputs-email" label="Correo electrónico" placeholder="ejemplo@ejemplo.com" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tea__scholar form_section">
                                <p>Información escolar</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs form__special">
                                            <Select contentClassName="tea__inputs-campus" label="Campus" />
                                            <Select contentClassName="tea__inputs-subImp" label="Materias que puede impartir" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
            <Buttons />

        </div>
    )
}

