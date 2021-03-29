import React, { useEffect, useState } from 'react';
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Date } from './Date';
import { Select } from '../ui/inputs/Select';
import { useForm } from '../../hooks/useForm';
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';
import { formsStartCreateStudent, formsStartGetCampus, formsStartGetGroups, formsStartGetMajors } from '../../actions/forms';
import { useDispatch, useSelector } from 'react-redux';

export const Students = () => {
    const dispatch = useDispatch();
    const { campus, groups, majors } = useSelector(state => state.forms)

    const [formValues, handleInputChange, reset] = useForm({
        matricula: '', name: '', surname_f: '', surname_m: '', day: '', month: '', year: '', curp: '', street: ' #213', colony: ' Durango II', zip: '', placeBirth: '', mobile_number: '', mobile_back_number: '', id_campus: campus[0].id_campus, id_group: groups[0].id_group, group_chief: 0
    });
    const { matricula, name, surname_f, surname_m, day, month, year, curp, street, colony, zip, placeBirth, mobile_number, mobile_back_number, id_campus, id_group, group_chief } = formValues;
    return (
        <div className="stu__generalContainer">
            <div className="containerSection form__container">
                <div className="form__inputExtra">
                    <OpenDropMenuButton />
                    <Input contentClassName="input__extra " nameInput="matricula" valueInput={matricula} handleInputChange={handleInputChange} label="Matricula"  />
                </div>
                <div className="form__container-content">
                    <div className="form__container-content-inf">
                        <BackTexture />
                        <div className="form_containerSection">
                            <form className="form__form">
                                <div className="stu__personal form_section">
                                    <p>Información personal</p>
                                    <div className="overTexture">
                                        <div className="form_inputsContainer">
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-name" nameInput="name" valueInput={name} handleInputChange={handleInputChange} label="Nombre(s)" />
                                                <Input contentClassName="stu__inputs-father" nameInput="surname_f" valueInput={surname_f} handleInputChange={handleInputChange} label="Apellido paterno" />
                                                <Input contentClassName="stu__inputs-mother" nameInput="surname_m" valueInput={surname_m} handleInputChange={handleInputChange} label="Apellido materno" />
                                                <Date
                                                    contentClassName="stu__inputs-dates"
                                                    selectDay={day}
                                                    selectMonth={month}
                                                    selectYear={year}
                                                    handleInputChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form__inputs ">
                                                <Input contentClassName="stu__inputs-curp" nameInput="curp" valueInput={curp} handleInputChange={handleInputChange} label="CURP" />
                                                <Input contentClassName="stu__inputs-street" nameInput="street" valueInput={street} handleInputChange={handleInputChange} label="Dirección" placeholder="Calle y número" />
                                                <Input contentClassName="stu__inputs-colony" nameInput="colony" valueInput={colony} handleInputChange={handleInputChange} label="-" placeholder="Colonia" />
                                                <Input contentClassName="stu__inputs-code" nameInput="zip" valueInput={zip} handleInputChange={handleInputChange} label="-" placeholder="Codigo postal" />
                                            </div>
                                            <div className="form__inputs form__special">
                                                <Input contentClassName="stu__inputs-birthplace" nameInput="placeBirth" valueInput={placeBirth} handleInputChange={handleInputChange} label="Lugar de nacimiento" placeholder="País/Ciudad/Municipio" />
                                                <Input contentClassName="stu__inputs-num1" nameInput="mobile_number" valueInput={mobile_number} handleInputChange={handleInputChange} label="Numero de teléfono" />
                                                <Input contentClassName="stu__inputs-num2" nameInput="mobile_back_number" valueInput={mobile_back_number} handleInputChange={handleInputChange} label="Numero de teléfono" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stu__scholar form_section">
                                    <p>Información escolar</p>
                                    <div className="overTexture">
                                        <div className="form_inputsContainer">
                                            <div className="form__inputs form__special">
                                                <Select
                                                    handleInputChange={handleInputChange}
                                                    contentClassName="stu__inputs-campus"
                                                    nameSelect="id_campus"
                                                    valueSelect={id_campus}
                                                    label="Campus"
                                                    options={campus.map(data => ({
                                                        id_campus: data.id_campus,
                                                        campus_name: data.campus_name
                                                    }))}
                                                />

                                                <Select
                                                    handleInputChange={handleInputChange}
                                                    contentClassName="stu__inputs-group"
                                                    nameSelect="id_group"
                                                    valueSelect={id_group}
                                                    label="Grupo"
                                                    options={groups.map(data => ({
                                                        id_group: data.id_group,
                                                        group_name: data.name_group
                                                    }))}
                                                />
                                                {/* <Select
                                                    handleInputChange={handleInputChange}
                                                    contentClassName="stu__inputs-career"
                                                    nameSelect=""
                                                    valueSelect={ }
                                                    label="Carrrera"
                                                    options={majors}
                                                /> */}
                                                {/* <input type="checkbox" value={group_chief} name="group_chief" onChange={handleInputChange} id="" />
                                                <p>Jefe de grupo</p> */}
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
                    action={formsStartCreateStudent}
                />
            </div>
        </div>
    )
}
