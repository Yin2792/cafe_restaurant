import React from 'react'
import { ImperialHomeHeader } from './ImperialHomeHeader'
import { ImperialHomeContnet } from './ImperialHomeContent'
import { ImperialHomeFooter} from './ImperialHomeFooter'
export const ImperialHomeContainer = () => {

    return (

        <div className="container-fluid p-0 m-0">

            <ImperialHomeHeader />
            <ImperialHomeContnet />
            <ImperialHomeFooter />
        </div>
    )
}
