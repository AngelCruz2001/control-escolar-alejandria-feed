import React from 'react'
import { Input } from '../ui/Input'
import { PanelJustAdded } from '../ui/panel/PanelJustAdded'

export const Students = () => {



    return (
        <div className="containerSection stu__container">
            <div className="stu__container-content">
                <div className="stu__container-content-inf">

                    <div className="stu__container-content-inf-texture">
                        <div className="stu__container-content-inf-texture-1"></div>
                        <div className="stu__container-content-inf-texture-2"></div>
                        <div className="stu__container-content-inf-texture-3"></div>
                        <div className="stu__container-content-inf-texture-4"></div>
                    </div>

                    <div className="stu__container-content-inf-form">
                        <form>
                            <div>
                                <Input />
                                <input type="text" className="stu__container-content-inf-form-name input"/>
                                <input type="text" className="stu__container-content-inf-form-father-surname input"/>                 
                                
                            </div>
                        </form>
                    </div>
                </div>
                <PanelJustAdded />
            </div>
        </div>
    )
}
