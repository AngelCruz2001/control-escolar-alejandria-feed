import React, { useState } from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'

export const Major = () => {


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
            <Buttons />

        </div>
    )
}
