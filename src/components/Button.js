import React from 'react';
import './../styles/Button.css'

function Button(props){
    return(
        <div className='buttons'>
<h3 onClick={props.previousButtonFunction}>{'<'}Previous </h3>
            <div className='middle-buttons'>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
            </div>
    <h3 onClick={props.nextButtonFunction}>Next{'>'}</h3>
        </div>

    )
}
export default Button;
