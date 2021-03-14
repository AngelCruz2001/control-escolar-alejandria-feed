import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'

export const Subject = () => {
    return (
<div className="containerSection form__container">
        <div className="form__container-content">
            <div className="form__container-content-inf subject__container-content-inf">
                <BackTexture />
                <div className="form_containerSection">
                    <form className="form__form" action="">
                        <div className="subject__personal form_section">
                            <div className="overTexture ">
                                <div className="form_inputsContainer">
                                    <div className="form__inputs subject__special">
                                        <Input  contentClassName="subject__inputs-subject input__special" 
                                        label="Materia:" 
                                        />
                                    </div>
                                    <div className="form__inputs subject__special">
                                        <Select     contentClassName="subject__inputs-major input__special" 
                                        label="Carrera:" 
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
