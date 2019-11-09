import React from 'react'
export const ImperialHomeContnet = () => {
    return (
        <div>
            <header style={{
                backgroundImage: `url("https://imperialcafemyanmar.com/assets/img/Restaurant.jpg")`, height: 'auto', minHeight: '500px',
                backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}>
            </header>
        <div className="container-fluid" style={{ marginTop: '-30px' }}>
            <div className="row h-100 align-items-center" style={{ backgroundColor: 'white' }}>
                <div className="col-12 text-center py-4 text-justify">
                    <h2 className="font-weight-light ">Available Foods In Our Restaurant</h2>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-4">
                    Menu Lists
                  <ul>
                        <li>hlllo</li>
                        <li>hlllo</li>
                        <li>hlllo</li>
                        <li>hlllo</li>
                    </ul>
                </div>
                <div className="col-md-8">
                    Menu Lists with cards
            </div>
            </div>

        </div>
        </div>
    )
}