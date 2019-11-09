import React from 'react'
import color from '../../../../assets/color'

export const ImperialHomeFooter = ()=>{
    return (
            <footer className="container-fluid" style={{backgroundColor:color.FooterBackGroundColor,color:color.FooterTextColor}}>
                  <div className="row h-100 align-items-center py-1">
                   <div className="col-12 text-center  text-justify">
                      <p className="font-weight-light">Copyright © 2019 - All Rights Reserved by Marter Solutions.</p>
                       </div>
               </div>
         
            </footer>

    )
}