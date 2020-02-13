import React from 'react'
import Option from './Option'

const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Plaese add item to start!!</p>}
           {
              props.options.map((option) => <Option option={option} key={option} handleDeleteOption={props.handleDeleteOption}/>)
           }
        </div>
    );
}

export default Options;
