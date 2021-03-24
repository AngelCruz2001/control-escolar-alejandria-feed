import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'
import { Date } from './Date'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';
import { formsStartCreatePersonal } from '../../actions/forms'
import { useForm } from '../../hooks/useForm';

export const Personal = () => {

    // Falta horarios
    const [formValues, handleInputChange, reset] = useForm({
        name: "nombre",
        surnameF: "apellido",
        surnameM: "apellido",
        rfc: "rfc",
        curp: "curp",
        mobile_number: "6182593051",
        email: "email@gmail.com",
        department_name:"",
        salary : 1000.0
    });

    const { 
        name,
        surnameF,
        surnameM,
        rfc,
        curp,
        mobile_number,
        email,
        department_name,
        salary
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
                        <form className="form__form" action="">
                            <div className="per__personal form_section">
                                <p>Información personal</p>
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs">
                                            <Input inputName = 'name' contentClassName="per__inputs-name" label="Nombre(s)" 
                                            valueInput={name}
                                            nameInput="name"
                                            handleInputChange={handleInputChange}
                                            />
                                            <Input inputName = 'surnameF' contentClassName="per__inputs-father" label="Apellido paterno"
                                            valueInput={surnameF}
                                            nameInput="surnameF"
                                            handleInputChange={handleInputChange}
                                            />
                                            <Input inputName = 'surnameM' contentClassName="per__inputs-mother" label="Apellido materno"
                                            valueInput={surnameM}
                                            nameInput="surnameM"
                                            handleInputChange={handleInputChange}
                                            />
                                            <Input inputName = 'rfc' contentClassName="per__inputs-RFC" label="RFC"
                                            valueInput={rfc}
                                            nameInput="rfc"
                                            handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Input inputName = 'curp' contentClassName="per__inputs-CURP" label="CURP" 
                                            valueInput={curp}
                                            nameInput="curp"
                                            handleInputChange={handleInputChange}
                                            />
                                            <Input inputName = 'mobile_number' contentClassName="per__inputs-num1 " label="Numero de teléfono" 
                                            valueInput={mobile_number}
                                            nameInput="mobile_number"
                                            handleInputChange={handleInputChange}
                                            />
                                            <Input inputName = 'email' contentClassName="per__inputs-email" label="Correo Electrónico" placeholder="ejemplo@ejemplo.com" 
                                            valueInput={email}
                                            nameInput="email"
                                            handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs form__special">
                                            <Select contentClassName="per__inputs-dep" label="Departamento" 
                                            nameSelect="department_name"
                                            //options={}
                                            handleInputChange={handleInputChange}
                                            //valueSelect={}
                                            
                                            />
                                            <Input inputName='salary' contentClassName="per__inputs-pay" label="Pago" placeholder="$0000.00 (Cantidad en letra)" 
                                            valueInput={salary}
                                            nameInput="salary"
                                            handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <Schedule />
                                        

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
            <Buttons
                formValues={formValues}
                reset={reset}
                action={formsStartCreatePersonal}
            />
        </div>
    )
}
