import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input  style={{paddingLeft: "40px",
            margin:" 8px 0",padding: "8px",
            border:"grey",
            // border:"solid", 
            borderRadius:"4px",width:"450px",height:"30px"}}
                // className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                 />; 
            break;
        case ( 'textarea' ):
            inputElement = <textarea  
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input  
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div  className={classes.Input}>
            <link rel = 'stylesheet' type = 'text/css' href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
></link>
            <label className={classes.Label}>{props.label}</label>
            <div class="inputWithIcon"  style = {{position: "relative"}}> 
            {inputElement}<br/><br/>               
              <i  style = {{
            "position": "absolute",
            left:"720px",
            // top:"0px",
            // float:"left",
            bottom: "45px",
            color: "#aaa",
            transition: "0.3s"
          }} className={props.className} aria-hidden="true"></i></div>

        </div>
    );

};

export default input;