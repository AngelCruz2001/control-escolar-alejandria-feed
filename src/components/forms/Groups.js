import React, { useEffect } from 'react'
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
    const { groups, errors, majors } = useSelector(state => state.forms)

    useEffect(() => {
        console.log(document.getElementsByClassName("input__error"));
        [...document.getElementsByClassName("input__error")].map(element => (element.classList.remove("input__error")));
        errors.map((errorBackend, i) => (document.getElementsByName(errorBackend)[0].className += (" input__error")))
    }, [errors])

    const [formValues, handleInputChange, reset] = useForm({
        id_major: majors[0].id_major, name_group: "", time_tables: []
    })
    const { id_major, name_group } = formValues;

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
                                                valueInput={id_major}
                                                nameInput="id_major"
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
                <PanelJustAdded
                    data={groups}
                    name="campus_name"
                    id="id_cam"
                />
            </div>
            <Buttons
                reset={reset}
                formValues={formValues}
                action={formsStartCreateGroups}
            />
        </div >
    )
}