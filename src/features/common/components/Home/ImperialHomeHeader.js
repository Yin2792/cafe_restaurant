import React from 'react'
import color from '../../../../assets/color'

export const ImperialHomeHeader = () => {


    return (
        <div className="d-flex d-inline-flex justify-content-around" style={{ position: 'fixed', overflow:'hidden',left: 0, right: 0, minHeight: "90px", backgroundColor: color.HeaderColor }}>
            <div style={{ height: "70px" }} className="mt-2" >
                <img alt="logo" src="https://imperialcafemyanmar.com/assets/img/logo.jpg" style={{verticalAlign: 'middle', height: '100%', width: 'auto', borderRadius: '50%' }} />
                <img alt="logo-restaurant" src="https://imperialcafemyanmar.com/assets/img/logoText.png" style={{ verticalAlign: 'middle', height: '100%', width: 'auto', borderRadius: '50%' }} />
            </div>
            <div className="mt-3" >
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" name="search"/>
                        <div className="input-group-btn">
                            <button className="btn"  style={{border:'0px'}}  type="submit" style={{backgroundColor:'white'}}><i className="fa fa-search"></i></button>
                        </div>
             </div>
                </div>
            </div>

            )
}