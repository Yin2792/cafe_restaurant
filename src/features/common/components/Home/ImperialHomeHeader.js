import React,{useState} from 'react'
import color from '../../../../assets/color'

export const ImperialHomeHeader = () => {

      const [isFocus,setFocus] = useState(false)
      const InputFocus =boolean=>{
           setFocus(boolean)
      }
    return (
        <div className="d-flex d-inline-flex justify-content-around" style={{ position: 'fixed', overflow: 'hidden', left: 0, right: 0, minHeight: "90px", backgroundColor: color.HeaderColor }}>
            <div style={{ height: "70px" }} className="mt-2" >
                <img alt="logo" src="https://imperialcafemyanmar.com/assets/img/logo.jpg" style={{ verticalAlign: 'middle', height: '100%', width: 'auto', borderRadius: '50%' }} />
                <img alt="logo-restaurant" src="https://imperialcafemyanmar.com/assets/img/logoText.png" style={{ verticalAlign: 'middle', height: '100%', width: 'auto', borderRadius: '50%' }} />
            </div>
            <div className="mt-3" >

                <div className="input-group">
                    <input className="form-control py-2 border-right-0 border" type="search" 
                    placeholder="Search"
                    onFocus={() => InputFocus(true)} style={isFocus?
                    {outline:'0!important',borderColor:'initial',boxShadow:'none'}:{backgroundColor:'white'}} />
                    <span className="input-group-append">
                        <button className="btn border-left-0 border" style={{backgroundColor:'white'}} type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>

            </div>
        </div>

    )
}