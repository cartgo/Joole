import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Home from '../../container/Home';

import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import Spinner from '../../component/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                icontype:'fa fa-user fa-lg fa-fw',

                elementConfig: {
                    type: 'email',
                    placeholder: 'Username or Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                icontype:'fa fa-lock fa-lg fa-fw',

                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        signupcontrols: {
            email: {
                icontype:'fa fa-user fa-lg fa-fw',

                elementType: 'input',
                elementConfig: {
                    type: 'email',

                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            username: {
                icontype:'fa fa-lock fa-lg fa-fw',

                elementType: 'input',
                elementConfig: {
                    type: 'username',

                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                icontype:'fa fa-lock fa-lg fa-fw',

                elementType: 'input',
                elementConfig: {
                    type: 'password',

                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },

        isSignup: false
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
      // console.log(...this.state.controls);
      if(this.state.isSignup===false){  const updatedControls = {
        ...this.state.controls,
        [controlName]: {
            ...this.state.controls[controlName],
            value: event.target.value,
            valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
            touched: true
        }
    };
    console.log(updatedControls);
    console.log(this.state);
    
    this.setState( { controls: updatedControls } );}else{ 
        const updatedControls = {
            ...this.state.signupcontrols,
            [controlName]: {
                ...this.state.signupcontrols[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.signupcontrols[controlName].validation ),
                touched: true
            }
        };
        console.log(updatedControls);
        console.log(this.state);
        
        this.setState( { signupcontrols: updatedControls } );
        
        }

        // const updatedControls = {
        //     ...this.state.controls,
        //     [controlName]: {
        //         ...this.state.controls[controlName],
        //         value: event.target.value,
        //         valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
        //         touched: true
        //     }
        // };
        // console.log(updatedControls);
        // console.log(this.state);
        
        // this.setState( { controls: updatedControls } );
        

    }

    submitHandler = ( event ) => {
        event.preventDefault();
        if(this.state.isSignup === false){
            this.props.onAuth( this.state.controls.email.value, null,this.state.controls.password.value, this.state.isSignup );}
            else{ this.props.onAuth( this.state.signupcontrols.email.value,  this.state.signupcontrols.username.value,this.state.signupcontrols.password.value, this.state.isSignup );}
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render () {
        console.log("authauthauth")
        let showcontrol = this.state.controls
        if(this.state.isSignup === true){showcontrol = this.state.signupcontrols}
        const formElementsArray = [];
        for ( let key in showcontrol ) {
            formElementsArray.push( {
                id: key,
                config: showcontrol[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                className = {formElement.config.icontype}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p className='loginerror'>{this.props.error}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                <Home></Home>
                {errorMessage}

                <form onSubmit={this.submitHandler}>
                    {form}
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                      <Button btnType="Success" >
                        {/* SUBMIT */}
                        {this.state.isSignup ? 'Sign up' : 'Log In'}
                        </Button>
                </form>
                <div style = {{position:"absolute", top:"25px",right:"60px" }}  >
                <button 
                style = {{color:"rgba(0, 0, 0, 0.514)", width:"70px",position:"absolute" ,backgroundColor:"transparent", borderColor:"transparent",}} 
                onClick={this.switchAuthModeHandler}> {this.state.isSignup ? 'Sign In' : 'Sign Up'}</button>
                {/* <Button  
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button> */}
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
         authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
      // onAuth: ( email, password, isSignup ) => dispatch({type:actionTypes.AUTH_START}）,
        onAuth: ( email,  username,password,isSignup ) => dispatch( actions.auth( email,username, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
