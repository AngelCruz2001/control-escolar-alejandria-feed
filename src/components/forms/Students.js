import React from 'react';
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Date } from './Date';
import { Select } from '../ui/inputs/Select';
import { useForm } from '../../hooks/useForm';
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';
import moment from 'moment';

export const Students = () => {

    const [formValues, handleInputChange, reset] = useForm({
        idStudent: '',
        names: '',
        surnameF: '',
        surnameM: '',
        day: '',
        month: '',
        year: '',
        age: '',
        CURP: '',
        street: '',
        colony: '',
        zipCode: '',
        placeBirth: '',
        numCel: '',
        numCel2: '',
        email: '',

    });

    const { idStudent,
        names,
        surnameF,
        surnameM,
        day,
        month,
        year,
        age,
        CURP,
        street,
        colony,
        zipCode,
        placeBirth,
        numCel,
        numCel2,
        email, } = formValues;
    // console.log(moment().month());
    const handleSubmit = () => {
        console.log("Subir datos:", formValues)
    }
    return (
        <div className="stu__generalContainer">
            <div className="containerSection form__container">
                <div className="form__inputExtra">
                    <OpenDropMenuButton />
                    <Input contentClassName="input__extra " nameInput="idStudent" valueInput={idStudent} handleInputChange={handleInputChange} label="Matricula" />
                </div>
                <div className="form__container-content">
                    <div className="form__container-content-inf">
                        <BackTexture />
                        <div className="form_containerSection">
                            <form className="form__form" action="">
                                <div className="stu__personal form_section">
                                    <p>Información personal</p>
                                    <div className="overTexture">
                                        <div className="form_inputsContainer">
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-name" nameInput="names" valueInput={names} handleInputChange={handleInputChange} label="Nombre(s)" />
                                                <Input contentClassName="stu__inputs-father" nameInput="surnameF" valueInput={surnameF} handleInputChange={handleInputChange} label="Apellido paterno" />
                                                <Input contentClassName="stu__inputs-mother" nameInput="surnameM" valueInput={surnameM} handleInputChange={handleInputChange} label="Apellido materno" />
                                                <Date contentClassNaSme="stu__inputs-dates" />
                                            </div>
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-age" nameInput="age" valueInput={age} handleInputChange={handleInputChange} label="Edad" />
                                                <Input contentClassName="stu__inputs-CURP" nameInput="CURP" valueInput={CURP} handleInputChange={handleInputChange} label="CURP" />
                                                <Input contentClassName="stu__inputs-street" nameInput="street" valueInput={street} handleInputChange={handleInputChange} label="Dirección" placeholder="Calle y número" />
                                                <Input contentClassName="stu__inputs-colony" nameInput="colony" valueInput={colony} handleInputChange={handleInputChange} label="-" placeholder="Colonia" />
                                                <Input contentClassName="stu__inputs-code" nameInput="zipCode" valueInput={zipCode} handleInputChange={handleInputChange} label="-" placeholder="Codigo postal" />
                                            </div>
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-birthplace" nameInput="placeBirth" valueInput={placeBirth} handleInputChange={handleInputChange} label="Lugar de nacimiento" placeholder="País/Ciudad/Municipio" />
                                                <Input contentClassName="stu__inputs-num1" nameInput="numCel" valueInput={numCel} handleInputChange={handleInputChange} label="Numero de teléfono" />
                                                <Input contentClassName="stu__inputs-num2" nameInput="numCel2" valueInput={numCel2} handleInputChange={handleInputChange} label="Numero de teléfono" />
                                                <Input contentClassName="stu__inputs-email" nameInput="email" valueInput={email} handleInputChange={handleInputChange} label="Correo electrónico" placeholder="ejemplo@ejemplo.com" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stu__scholar form_section">
                                    <p>Información escolar</p>
                                    <div className="overTexture">
                                        <div className="form_inputsContainer">
                                            <div className="form__inputs">
                                                <Select contentClassName="stu__inputs-birthplace" label="Campus" />
                                                <Select contentClassName="stu__inputs-num1" label="Estatus" />
                                                <Select contentClassName="stu__inputs-num2" label="Carrrera" />
                                                <Select contentClassName="stu__inputs-email" label="Grupo" />
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
                    handleClickClean={handleClean}
                    handleClickSave={handleSubmit}
                />
            </div>
        </div>
    )
}
