import React from 'react';

import classes from './Button.css';
import classes2 from '../../../container/Auth/Auth.css'
const button = (props) => (
    <button
    // style = {{color:"green" }}
        disabled={props.disabled}
        // className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;