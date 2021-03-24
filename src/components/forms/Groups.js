import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { OpenDropMenuButton } from '../ui/Buttons'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'
import { useForm } from '../../hooks/useForm';


export const Groups = () => {

    // Falta horarios
    const [formValues, handleInputChange, reset] = useForm({
        id_group: 6,
        id_major: 1,
        name_group: "gro",
        entry_year: "1000-01-01",
        end_year: "2000-01-01",
        major_name: "Licenciatura en derecho"
    })
    const {
        id_major,
        name_group,
        major_name
    } = formValues
    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className=" form_containerSection">
                        <form className="form__form  form__form-special" action="">
                            <div className="gro__students form_section ">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer form__inputs">
                                        <div className="form__inputs gro__inputsContainer">
                                            <Input contentClassName="gro__inputs-group input__special" name='name_group' label="Grupo"
                                                valueInput={name_group}
                                                nameInput="name_group"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Select contentClassName="gro__inputs-major input__special" label="Carrera"
                                                nameSelect="state"
                                                valueInput={major_name}
                                                nameInput="major_name"
                                                handleInputChange={handleInputChange}
                                            />
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