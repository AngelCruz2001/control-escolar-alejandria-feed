import React from 'react'
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Date } from './Date';
import { Select } from '../ui/inputs/Select';

export const Teachers = () => {
    return (
        <div className="containerSection stu__container">
            <div className="stu__container-content">
                <div className="stu__container-content-inf">
                    <BackTexture />
                    <div className=" stu_containerSection">
                        <form action="">
                            <div className="stu__personal">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Input contentClassName="stu__inputs-name" label="Nombre(s)" />
                                            <Input contentClassName="stu__inputs-father" label="Apellido paterno" />
                                            <Input contentClassName="stu__inputs-mother" label="Apellido materno" />
                                            <Input contentClassName="stu__inputs-RFC" label="RFC" />
                                        </div>
                                        <div className="form__inputs">
                                            <Input contentClassName="stu__inputs-CURP" label="CURP" />
                                            <Input contentClassName="stu__inputs-num" label="Dirección" placeholder="Calle y número" />
                                            <Input contentClassName="stu__inputs-street" label="Dirección" placeholder="Calle y número" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="stu__scholar">
                                <p>Información escolar</p>
                                <div className="overTexture ">
                                    <div className="stu_inputsContainer">
                                        <div className="form__inputs">
                                            <Select contentClassName="stu__inputs-birthplace" label="Campus" />
                                            <Select contentClassName="stu__inputs-num1" label="Estatus" />
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

