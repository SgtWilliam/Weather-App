import React, { useState } from 'react'

export const BoxInfo = () => {

    const [showConditionOneText, setShowConditionOneText] = useState(false)

    const handleClick = () =>
        setShowConditionOneText(showConditionOneText => !showConditionOneText)

    return (
        <div>
            <button onClick={handleClick}>Toggle the text</button>
            {showConditionOneText ? (

         <div>
             <h1>Rola</h1>
         </div>


            ) : ( <h1>sENIN</h1> )}
        </div>
    )
}

export default BoxInfo;