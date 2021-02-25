import React from 'react'
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Date } from './Date';
import { Select } from '../ui/inputs/Select';

export const Teachers = () => {
    return (
        <div className="containerSection form__container">
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="tea__personal">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Input contentClassName="tea__inputs-name" label="Nombre(s)" />
                                            <Input contentClassName="tea__inputs-father" label="Apellido paterno" />
                                            <Input contentClassName="tea__inputs-mother" label="Apellido materno" />
                                            <Input contentClassName="tea__inputs-RFC" label="RFC" />
                                        </div>
                                        <div className="form__inputs">
                                            <Input contentClassName="tea__inputs-CURP" label="CURP" />
                                            <Input contentClassName="tea__inputs-num" label="Dirección" placeholder="Calle y número" />
                                            <Input contentClassName="tea__inputs-street" label="Dirección" placeholder="Calle y número" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tea__scholar">
                                <p>Información escolar</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Select contentClassName="tea__inputs-birthplace" label="Campus" />
                                            <Select contentClassName="tea__inputs-num1" label="Estatus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
        </div>
    )
}

