import React, { useEffect } from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Buttons, OpenDropMenuButton } from '../ui/Buttons';
import { useDispatch, useSelector } from 'react-redux'
import { formsStartGetMajors, formsStartCreateSubject } from '../../actions/forms'
import { useForm } from '../../hooks/useForm'

export const Subject = () => {
    const { majors, errors,courses } = useSelector(state => state.forms)

    useEffect(() => {
        [...document.getElementsByClassName("input__error")].map(element => (element.classList.remove("input__error")));
        errors.map((errorBackend, i) => (document.getElementsByName(errorBackend)[0].className += (" input__error")))
    }, [errors])

    const [formValues, handleInputChange, reset] = useForm({
        id_major: majors[0].id_major,
        course_name: majors[0].course_name,
    });
    const { id_major, course_name } = formValues;
    return (
        <div className="containerSection form__container">
            <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
            <div className="form__container-content">
                <div className="form__container-content-inf subject__container-content-inf">
                    <BackTexture />
                    <div className="form_containerSection">
                        <form className="form__form" action="">
                            <div className="subject__personal form_section">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer">
                                        <div className="form__inputs subject__special">
                                            <Input
                                                nameInput="course_name"
                                                contentClassName="subject__inputs-subject input__special"
                                                label="Materia:"
                                                valueInput={course_name}
                                                nameInput="course_name"
                                                handleInputChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form__inputs subject__special">
                                            <Select contentClassName="subject__inputs-major input__special"
                                                label="Carrera:"
                                                options={majors}
                                                nameSelect="id_major"
                                                valueSelect={id_major}
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
                    data={courses}
                    name="courses_name"
                    id="id_courses"
                />
            </div>
            <Buttons
                formValues={formValues}
                reset={reset}
                action={formsStartCreateSubject}
            />
        </div>
    )
}
