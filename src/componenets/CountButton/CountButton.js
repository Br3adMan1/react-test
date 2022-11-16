import React, {useState} from "react"
import './CountButton.css'

// function CountButton(){}

const CountButton = (props) => {
    console.log(props.incrementBy)
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }
const buttonStyles=
{
    background: props.buttonColor,
    borderRadius: props.borderRadius
}
 
    return (
    <div>
        <button style={buttonStyles} onClick ={handleClick}>+{props.incrementBy} </button>
        <div className={'count-display'}>{currentCount}</div>
    </div>
    )
    
    
}

export default CountButton