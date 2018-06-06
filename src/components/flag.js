import React from 'react'

const URL_BASE = "http://www.sciencekids.co.nz/images/pictures/flags680/"
const Flag = ({country,className}) => {
    return (<div>
        <img className={className} src={`${URL_BASE}${country}.jpg`}/>
    </div>
    )
}

export default Flag