// Import library
import { IonPage } from "@ionic/react";
import React from "react";
import { useState } from "react";

// Import components

// Import css
import "./login_page.css"
import "../../main.css"

export default function LoginPage() {
    const [hidepassword, setHidepassword] = useState(true);

    // Function to show/hide password
    const toggleTypePassword = () => setHidepassword(!hidepassword);

    return (
        <IonPage>
            <div className="loginPage">
                <div className="loginPage__loginForm">
                    <div className="loginPage__element loginPage__element--headerBox">
                        <img className="loginPage__header--icon" src="public/assets/logo.png" alt="Logo" />
                        <h1 className="loginPage__header--content">Welcome to WyA</h1>
                    </div>
    
                    <div className="loginPage__element loginPage__element--inputForm">
                        <div className="loginPage__inputContainer loginPage__inputContainer--username">
                            <div className="loginPage__inputBox">
                                <i className="fa-regular fa-user inputUsernameIcon"></i>
                                <input className="loginPage__input" type="text" placeholder="Username..." />
                            </div>
    
                            <p className="loginPage__announce">Error message!!</p>
                        </div>
    
                        <div className="loginPage__inputContainer loginPage__inputContainer--password">
                            <div className="loginPage__inputBox">
                                <i className="fa-solid fa-fingerprint inputPasswordIcon"></i>
                                <input className="loginPage__input" type={hidepassword ? "password" : "text"} placeholder="Password..." />
                                <i className="fa-solid fa-eye" onClick={toggleTypePassword}></i>
                            </div>
    
                            <p className="loginPage__announce">Error message!!</p>
                        </div>
    
                        <div className="loginPage__forgotPasswordBox">
                            <a className="loginPage__forgotPasswordBox--forgotPasswordDirection" href="#">Forgot password?</a>
                        </div>
                    </div>
    
                    <div className="loginPage__element loginPage__element--btnForm">
                        <button className="btnForm--btn">Sign in</button>
                    </div>
    
                    <div className="loginPage__element loginPage__element--signupAccount">
                        <a className="loginPage__element--signupDirection" href="#">Create an new account</a>
                    </div>
                </div>
            </div>
        </IonPage>

    )
}