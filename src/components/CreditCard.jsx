//import visa from '/src/assets/images/visa.png'
//import mastercard from '/src/assets/images/master-card.svg'
import React from 'react'



function CreditCard(props) {

function maskify(string) {
        return string.replace(/.(?=....)/g, '#');
      }
const style = {
    backgroundColor: props.bgColor,
    color: props.color,
}
console.log (style)
  return (
    <div className='bank-card' style={style} >
     {props.type === 'Master card' ? <p><img src='./src/assets/images/master-card.svg' ></img></p> : <p><img src='./src/assets/images/visa.png' ></img></p>}
     <p>{maskify(props.number)}</p>
     <div>
        <div>
            <p>Expires {props.expirationMonth > 10 ? <span>{props.expirationMonth}</span> : <span>0{props.expirationMonth}</span>}/
            <span>{props.expirationYear.toString().slice(-2)}</span></p>
            <p>{props.bank}</p>
        </div>
        <div>
            <p>{props.owner}</p>
        </div>
       
     </div>
    </div>
  )
}

export default CreditCard