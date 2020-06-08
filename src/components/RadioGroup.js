import React from 'react'

function RadioGroup(props) {

    const { choice, changeHandler, options, name } = props 

    // console.log(choice)
    
        return(
            <div style={{margin: '20px'}} onChange={changeHandler}>

                {options.map(option => (
                    <span>
                        <label>{option}: </label>
                        <input type='radio' name={name} value={option} checked={choice === option} />
                    </span>
                ))}
            </div>
        )
    
}

export default RadioGroup


// return(
//     <div style={{margin: '20px'}} onChange={changeHandler}>
//         <label>All: </label>
//         <input type='radio' name='greaseFilter' value='all' checked={choice === 'all'} />
//         <label>Greased: </label>
//         <input type='radio' name='greaseFilter' value='greased' checked={choice === 'greased'} />
//     </div>
// )