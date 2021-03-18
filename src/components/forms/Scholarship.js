import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { OpenDropMenuButton } from '../ui/Buttons'
import { Input } from '../ui/inputs/Input'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'

export const Scholarship = () => {
    return (
        <div className="containerSection form__container">
            <div className="form__container-content">
                <div className="form__container-content-inf scholar__container-content-inf">
                   <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="scholar__personal form_section">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs form__column  scholar__special">
                                            <Input contentClassName="scholar__inputs-id"
                                                label="Maricula"
                                            />
                                            <Input contentClassName="scholar__inputs-student"
                                                label="Becario"
                                            />
                                            <Input contentClassName="scholar__inputs-scholarname"
                                                label="Nombre de la beca"
                                            />
                                            <Input contentClassName="scholar__inputs-about"
                                                label="Razón de beca"
                                            />
                                            <Input contentClassName="scholar__inputs-percentaje"
                                                type="range"
                                                min="1"                    // default 0
                                                max="100"                  // default 100
                                                step="1"                   // default 1
                                                value="100"                 // default min + (max-min)/2
                                                // default horizontal
                                                label="Porcentaje de beca"
                                            />
                                            <Input contentClassName="scholar__inputs-observation" inputClassName="scholar__inputs-observationIn"
                                                label="Observaciones"
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
