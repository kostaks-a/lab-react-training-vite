function Greetings(props) {
console.log(props)
 
if (props.lang === 'de'){
  return (
    <div>
        <p>Hello {props.children}</p>
    </div>
  )}
  else if (props.lang === 'en'){
    return (
        <div>
           <p>Hello {props.children}</p>
        </div>
      )          
    }
else if (props.lang === 'es'){
    return (
        <div>
            <p>Hello {props.children}</p>
        </div>
      )
    
}
else if (props.lang === 'fr'){
    return (
        <div>
            <p>Bonjour {props.children}</p>

        </div>
      )}

}


export default Greetings