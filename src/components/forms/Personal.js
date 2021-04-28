import React, { useEffect } from 'react'
import { BackTexture } from '../ui/BackTextureFeed'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'
import { Date } from './Date'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';
import { formsStartCreate, formsStartCreatePersonal, formStartUpdate } from '../../actions/forms'
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux'
import { useError } from '../../hooks/useError'
import { usePanel } from '../../hooks/usePanel'
import { types } from '../../types/types'

export const Personal = () => {
    const { personal, departments, campus, active } = useSelector(state => state.forms)

    useError()
    usePanel(personal, 'name', 'id_personal', types.formsGetPersonal)
    // Falta horarios
    const [formValues, handleInputChange, reset, setValue] = useForm({
        name: "", surname_f: "", surname_m: "", rfc: "", curp: "", mobile_number: "", id_department: '', id_campus: '', salary: '', time_table: []
    });
    useEffect(() => { active && setValue({ ...active }) }, [active])
    const { name, surname_f, surname_m, rfc, curp, mobile_number, id_department, id_campus, salary } = formValues;
    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className=" form_containerSection">
                        <form className="form__form" action="">
                            <div className="per__personal form_section">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Input inputName='name' contentClassName="per__inputs-name" label="Nombre(s)"
                                                valueInput={name}
                                                nameInput="name"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input inputName='surname_f' contentClassName="per__inputs-father" label="Apellido paterno"
                                                valueInput={surname_f}
                                                nameInput="surname_f"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input inputName='surname_m' contentClassName="per__inputs-mother" label="Apellido materno"
                                                valueInput={surname_m}
                                                nameInput="surname_m"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input inputName='rfc' contentClassName="per__inputs-RFC" label="RFC"
                                                valueInput={rfc}
                                                nameInput="rfc"
                                                handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Input inputName='curp' contentClassName="per__inputs-CURP" label="CURP"
                                                valueInput={curp}
                                                nameInput="curp"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input inputName='mobile_number' contentClassName="per__inputs-num1 " label="Numero de teléfono"
                                                valueInput={mobile_number}
                                                nameInput="mobile_number"
                                                handleInputChange={handleInputChange}
                                            />

                                        </div>
                                        <div className="form__inputs form__special">
                                            <Select contentClassName="per__inputs-dep" label="Departamento"
                                                nameSelect="id_department"
                                                options={departments}
                                                handleInputChange={handleInputChange}
                                                valueSelect={id_department}
                                            />
                                            <Input inputName='salary' contentClassName="per__inputs-pay" label="Pago" placeholder="$0000.00"
                                                valueInput={salary}
                                                nameInput="salary"
                                                handleInputChange={handleInputChange}
                                            />

                                            <Select
                                                handleInputChange={handleInputChange}
                                                contentClassName="per__inputs-cam"
                                                label="Campus"
                                                nameSelect="id_campus"
                                                options={campus}
                                                valueSelect={id_campus}
                                            />

                                        </div>
                                        <Schedule
                                            formValues={formValues}
                                            handleInputChange={handleInputChange}
                                        />


                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded
                    data={personal}
                    name="personal_name"
                    id="id_personal"
                />
            </div>
            <Buttons
                formValues={formValues}
                reset={reset}
                action={active ? formStartUpdate : formsStartCreate}
                text="Grupo"
                endpoint="groups"
            />
        </div>
    )
}
