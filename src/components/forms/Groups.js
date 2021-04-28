import React, { useEffect } from 'react'
import { BackTexture } from '../ui/BackTextureFeed'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux'
import { formsStartCreate, formsStartCreateGroups, formStartUpdate } from '../../actions/forms'
import { useError } from '../../hooks/useError'
import { usePanel } from '../../hooks/usePanel'
import { types } from '../../types/types'


export const Groups = () => {
    const { groups, majors, active } = useSelector(state => state.forms)

    useError();

    const [formValues, handleInputChange, reset, setValue] = useForm({
        id_major: '', name_group: "", time_table: []
    })
    const { id_major, name_group } = formValues;

    usePanel(groups, "name_group", "id_group", types.formsGetGroups);

    useEffect(() => { active && setValue({ ...active }) }, [active])
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
                                                nameSelect="id_major"
                                                valueSelect={id_major}
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
                action={active ? formStartUpdate : formsStartCreate}
                text="Grupo"
                endpoint="groups"


            />
        </div >
    )
}