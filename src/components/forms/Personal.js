import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Date } from './Date'

export const Personal = () => {
    return (
        <div className="containerSection form__container">
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className=" form_containerSection">
                        <form className="form__form" action="">
                            <div className="per__personal">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Input contentClassName="per__inputs-name" label="Nombre(s)" />
                                            <Input contentClassName="per__inputs-father" label="Apellido paterno" />
                                            <Input contentClassName="per__inputs-mother" label="Apellido materno" />
                                            <Date contentClassName="per__inputs-dates" />
                                        </div>
                                        <div className="form__inputs">
                                            <Input contentClassName="per__inputs-age" label="Edad" />
                                            <Input contentClassName="per__inputs-CURP" label="CURP" />
                                            <Input contentClassName="per__inputs-street" label="Dirección" placeholder="Calle y número" />
                                            <Input contentClassName="per__inputs-colony" label="-" placeholder="Colonia" />
                                            <Input contentClassName="per__inputs-code" label="-" placeholder="Codigo postal" />
                                        </div>
                                        <div className="form__inputs">
                                            <Input contentClassName="per__inputs-birthplace" label="Lugar de nacimiento" placeholder="País/Ciudad/Municipio" />
                                            <Input contentClassName="per__inputs-num1" label="Numero de teléfono" />
                                            <Input contentClassName="per__inputs-num2" label="Numero de teléfono" />
                                            <Input contentClassName="per__inputs-email" label="Correo electrónico" placeholder="ejemplo@ejemplo.com" />
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
