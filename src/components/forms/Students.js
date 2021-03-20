import React from 'react';
import { BackTexture } from '../ui/BackTexture';
import { Input } from '../ui/inputs/Input';
import { PanelJustAdded } from '../ui/panel/PanelJustAdded';
import { Date } from './Date';
import { Select } from '../ui/inputs/Select';
import { useForm } from '../../hooks/useForm';
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';

export const Students = () => {

    const [formValues, handleInputChange, reset] = useForm({
        names: '',
        surname: '',
        Surname: '',
        day: '',
        month: '',
        year: '',
        age: '',
        curp: '',
        street: '',
        address: '',
        zip: '',  
    });



    return (
        <div className="stu__generalContainer">
            <div className="containerSection form__container">
                <div className="form__inputExtra">
                    <OpenDropMenuButton />
                    <Input contentClassName="input__extra " label="Matricula" />
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
                                                <Input contentClassName="stu__inputs-name" label="Nombre(s)" />
                                                <Input contentClassName="stu__inputs-father" label="Apellido paterno" />
                                                <Input contentClassName="stu__inputs-mother" label="Apellido materno" />
                                                <Date contentClassNaSme="stu__inputs-dates" />
                                            </div>
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-age" label="Edad" />
                                                <Input contentClassName="stu__inputs-CURP" label="CURP" />
                                                <Input contentClassName="stu__inputs-street" label="Dirección" placeholder="Calle y número" />
                                                <Input contentClassName="stu__inputs-colony" label="-" placeholder="Colonia" />
                                                <Input contentClassName="stu__inputs-code" label="-" placeholder="Codigo postal" />
                                            </div>
                                            <div className="form__inputs">
                                                <Input contentClassName="stu__inputs-birthplace" label="Lugar de nacimiento" placeholder="País/Ciudad/Municipio" />
                                                <Input contentClassName="stu__inputs-num1" label="Numero de teléfono" />
                                                <Input contentClassName="stu__inputs-num2" label="Numero de teléfono" />
                                                <Input contentClassName="stu__inputs-email" label="Correo electrónico" placeholder="ejemplo@ejemplo.com" />
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
                <Buttons />
            </div>
        </div>
    )
}
