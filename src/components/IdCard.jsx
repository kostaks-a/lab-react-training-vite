import React from 'react'

function IdCard(props) {
    console.log(props.birth)
  return (
    <div>
        <div className="card">
            <div className='card-img'>
                <img src={props.picture} alt='profile' />
            </div>
            <div className='card-text'>
                <p className='lastName'>lastName:{props.lastName}</p>
                <p className='firstName' >firstName:{props.firstName}</p>
                <p className='gender'>gender:{props.gender}</p>
                <p className='height'>height:{props.height}</p>
                <p className='birth'>birth:{props.birth.toString().slice(0,15)}</p>
            </div>           
        </div>
    </div>
  )
}

export default IdCard