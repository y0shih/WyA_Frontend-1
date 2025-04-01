// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./register_page.css"
import "../../main.css"

const RegisterPage:React.FC = () => {
    return (
        <IonPage>
            <div className="registerPage">
            <div className="registerPage__registerForm">
                    <div className="registerPage__element registerPage__element--headerBox">
                        <img className="registerPage__header--icon" src= "src/assets/logo.png" alt="Logo" />
                        <h1 className="registerPage__header--content">Come join us</h1>
                    </div>
    
                    <div className="registerPage__element registerPage__element--inputForm">
                        <div className="registerPage__inputContainer registerPage__inputContainer--username">
                            <div className="registerPage__inputBox">
                                <i className="fa-regular fa-user inputUsernameIcon"></i>
                                <input className="registerPage__input" type="text" placeholder="Username..." />
                            </div>
    
                            <p className="registerPage__announce">Error message!!</p>
                        </div>
    
                        <div className="registerPage__inputContainer registerPage__inputContainer--gmail">
                            <div className="registerPage__inputBox">
                                <i className="fa-regular fa-envelope inputGmailIcon"></i>
                                <input className="registerPage__input" type="text" placeholder="Gmail..." />
                            </div>
    
                            <p className="registerPage__announce">Error message!!</p>
                        </div>

                        <div className="registerPage__inputContainer registerPage__inputContainer--password">
                            <div className="registerPage__inputBox">
                                <i className="fa-solid fa-fingerprint inputPasswordIcon"></i>
                                <input className="registerPage__input" type="text" placeholder="Password..." />
                            </div>
    
                            <p className="registerPage__announce">Error message!!</p>
                        </div>

                        <div className="registerPage__inputContainer registerPage__inputContainer--confirmPassword">
                            <div className="registerPage__inputBox">
                                <i className="fa-solid fa-fingerprint inputConfirmPasswordIcon"></i>
                                <input className="registerPage__input" type="text" placeholder="Confirm password..." />
                            </div>
    
                            <p className="registerPage__announce">Error message!!</p>
                        </div>
                    </div>
    
                    <div className="registerPage__element registerPage__element--btnForm">
                        <button className="btnForm--btn">Sign up</button>
                    </div>
    
                    <div className="registerPage__element registerPage__element--signinAccount">
                        <a className="registerPage__element--signinDirection" href="#">Already have account?</a>
                    </div>
                </div>
            </div>
        </IonPage>
    )
}

export default RegisterPage