import React from 'react'
import { BackTexture } from '../ui/BackTexture'
import { Input } from '../ui/inputs/Input'
import { Select } from '../ui/inputs/Select'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'
import { Schedule } from '../ui/schedule/Schedule'

export const Groups = () => {
    return (
        <div className="containerSection form__container">
            <div className="form__container-content">
                <div className="form__container-content-inf">
                    <BackTexture />
                    <div className=" form_containerSection">
                        <form className="form__form  form__form-special" action="">
                            <div className="gro__students form_section ">
                                <div className="overTexture ">
                                    <div className="form_inputsContainer form__inputs">
                                        <div className="form__inputs gro__inputsContainer">
                                            <Select contentClassName="gro__inputs-group input__special" label="Grupo" />
                                            <Select contentClassName="gro__inputs-major input__special" label="Carrera" />
                                        </div>
                                        <div className="form__inputs gro__tableContainer ">

                                            <table className="gro__table">
                                                <thead>
                                                    <tr className="gro__table-title">
                                                        <th className="gro__table-name">Nombre del alumno</th>
                                                        <th className="gro__table-id">Matricula</th>
                                                        <th className="gro__table-grade">Calificación</th>
                                                        <th className="gro__table-buttons"></th>
                                                        <th className="gro__table-buttons"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {[
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                        { name: 'Angel Retana ', id: '000000000', grade: '5.0' },
                                                    ].map(
                                                        ({ name, id, grade }, i) => (
                                                            <tr className='gro__table-item' key={i}>
                                                                <td className="gro__table-name">{name}</td>
                                                                <td className="gro__table-id">{id}</td>
                                                                <td className="gro__table-grade">{grade}</td>
                                                                <td className="gro__table-buttonEdit">
                                                                    <button className="btn btn-edit">
                                                                        <i className="fas fa-edit"></i>
                                                                    </button>

                                                                </td>
                                                                <td className="gro__table-buttonDelete">

                                                                    <button className="btn ">
                                                                        <i className="fas fa-trash"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )

                                                    )}

                                                </tbody>
                                            </table>
                                        </div>
                                        {/* <button className="gro__addStudent">
                                            <label> Agregar alumno</label>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="gro__schedule form_section ">
                                <div className="overTexture ">
                                    <div className="form__inputs ">
                                        <Schedule vertical={true} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
        </div >
    )
}