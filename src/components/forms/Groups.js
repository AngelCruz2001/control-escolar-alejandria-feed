import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux'
import { formsStartCreateGroups } from '../../actions/forms'


export const Groups = () => {
    const { majors } = useSelector(state => state.forms)
    const [formValues, handleInputChange, reset] = useForm({
        id_group: 6, id_major: 1, name_group: "El mejor grupo", major_name: "Licenciatura en derecho", time_tables: []
    })
    const { id_major, name_group, major_name, } = formValues;

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
                                                options={majors}
                                            />
                                            <Schedule
                                                formValues={formValues}
                                                handleInputChange={handleInputChange}
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
            <Buttons
                reset={reset}
                formValues={formValues}
                action={formsStartCreateGroups}
            />
        </div >
    )
}