import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'


function Speechtest(){

    

    const {speak, voices} = useSpeechSynthesis();

    

    const test = () => {
        speak({text:'Hi'})
    }

    return(
    <div>
        <button onClick={test}>Test</button>
    </div>
    )
}

export default Speechtest;