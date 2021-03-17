import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'


export const Groups = () => {
    return (
        <div className="containerSection form__container">
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className=" form_containerSection">
                        <form className="form__form  form__form-special" action="">
                            <div className="gro__students form_section ">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer form__inputs">
                                        <div className="form__inputs gro__inputsContainer">
                                            <Input contentClassName="gro__inputs-group input__special" label="Grupo" />
                                            <Select contentClassName="gro__inputs-major input__special" label="Carrera" />
                                            <Schedule />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
        </div >
    )
}