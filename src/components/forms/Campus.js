import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'

export const Campus = () => {
    return (
        <div className="containerSection form__container">
        <div className="form__container-content">
            <div className="form__container-content-inf cam__container-content-inf">
                <BackTexture />
                <div className="form_containerSection">
                    <form className="form__form" action="">
                        <div className="cam__personal form_section">
                            <div className="overTexture ">
                                <div className="form_inputsContainer">
                                    <div className="form__inputs cam__special">
                                        <Input  contentClassName="cam__inputs-campus" 
                                        label="Campus" 
                                        />
                                    </div>
                                    <div className="form__inputs cam__special">
                                        <Input contentClassName="cam__inputs-street"  label="Dirección"
                                        placeholder="Calle y Número"
                                        />
                                        <Input contentClassName="cam__inputs-address" 
                                        placeholder="Colonia" 
                                        label="-"
                                        />
                                        <Input  contentClassName="cam__inputs-zip"   placeholder="Código Postal" 
                                        label="-"
                                        />
                                    </div>
                                    <div className="form__inputs cam__special">
                                        <Select     contentClassName="cam__inputs-state" 
                                        label="Estado" 
                                        />
                                        <Select     contentClassName="cam__inputs-state" 
                                        label="Municipio" 
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
    </div>
    )
}
