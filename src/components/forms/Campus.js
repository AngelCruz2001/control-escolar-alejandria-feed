import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { formsStartCreateCampus } from '../../actions/forms'
import { useForm } from '../../hooks/useForm'
import { statesAndMunicipalities } from '../../resources/states/statesAndMunicipalities'
import { BackTexture } from '../ui/BackTexture'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'

export const Campus = () => {
    const { campus, errors } = useSelector(state => state.forms)

    useEffect(() => {
        [...document.getElementsByClassName("input__error")].map(element => (element.classList.remove("input__error")));
        errors.map((errorBackend, i) => (document.getElementsByName(errorBackend)[0].className += (" input__error")))
    }, [errors])

    const [formValues, handleInputChange, reset] = useForm({
        campus_name: '',
        street: '',
        colony: '',
        zip: '',
        state: 'Durango',
        municipality: 'Durango',
    });

    const { campus_name,
        street,
        colony,
        zip,
        state,
        municipality } = formValues;


    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf cam__container-content-inf">
                    <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="cam__personal form_section">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs cam__special">
                                            <Input contentClassName="cam__inputs-campus"
                                                label="Campus"
                                                valueInput={campus_name}
                                                nameInput="campus_name"
                                                handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs cam__special">
                                            <Input contentClassName="cam__inputs-street" label="Dirección"
                                                placeholder="Calle y Número"
                                                valueInput={street}
                                                nameInput="street"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input contentClassName="cam__inputs-street"
                                                placeholder="Colonia"
                                                label="-"
                                                valueInput={colony}
                                                nameInput="colony"
                                                handleInputChange={handleInputChange}
                                            />
                                            <Input contentClassName="cam__inputs-zip" placeholder="Código Postal"
                                                label="-"
                                                valueInput={zip}
                                                nameInput="zip"
                                                handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs cam__special">
                                            <Select contentClassName="cam__inputs-state"
                                                label="Estado"
                                                nameSelect="state"
                                                options={Object.keys(statesAndMunicipalities)}
                                                handleInputChange={handleInputChange}
                                                valueSelect={state}
                                                states={true}
                                            />
                                            <Select contentClassName="cam__inputs-state"
                                                label="Municipio"
                                                nameSelect="municipality"
                                                options={statesAndMunicipalities[state]}
                                                handleInputChange={handleInputChange}
                                                valueSelect={municipality}
                                                states={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded
                    data={campus}
                    name="campus_name"
                    id="id_campus"
                />
            </div>
            <Buttons
                formValues={formValues}
                reset={reset}
                action={formsStartCreateCampus}
            />

        </div>
    )
}
