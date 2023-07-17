import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown,setShown] = React.useState(false)
    
    const [isPunchline,setPunchline] = React.useState("")
    
    const [isButtonToggle,setbuttonToggle] = React.useState("true")
    let buttonToggle = "show"
    
    function showPunch(){
        
        console.log(isShown)
        isShown === false ? setPunchline(props.punchline) :setPunchline("")  
        setShown(prevState => !prevState)
        return isPunchline
        
        //for changing button from show to hide
        isButtonToggle ===true ? buttonToggle="show" : buttonToggle="hide"
        setbuttonToggle(prevButtonState => !prevButtonState)
        return buttonToggle

    }
    
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isPunchline}</p>
            <button className='show-button' onClick={showPunch}>{buttonToggle}</button>
            <hr />
        </div>
    )
}