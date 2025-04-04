// Import library
import { IonPage } from "@ionic/react";
import React from "react";

import { useState } from "react";

// Import components

// Import css
import "./forgotpassword_page.css"
import "../../main.css"

const ForgotPassword: React.FC = () => {
    // State
    const [verifystate, setVerifystate] = useState<boolean>(false);
    
    // Data
    const [gmail, setGmail] = useState<string>("");
    
    // Error
    const [verifycode, setVerifycode] = useState<string>("");
    const [errorGmail, setErrorGmail] = useState<string>("");
    const [errorVerify, setErrorVerify] = useState<string>("");

    // Handler
    const handleGmail = () => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!gmailRegex.test(gmail)) {
            setErrorGmail("Invalid email format");
        }
        else {
            setVerifystate(true);
        }
    }

    const handleVerifyCode = () => {
        const verifycodeRegex = /^[0-9]{6}$/;
        if (!verifycodeRegex.test(verifycode)) {
            setErrorVerify("Invalid verify code format");
        }
        else {
            // Call API to get password
        }
    }

    return (
        <IonPage>
            <div className="forgotPasswordPage">
                <div className="forgotPasswordPage__form">
                    <div className="forgotPasswordPage__element forgotPasswordPage__element--headerBox">
                        <img className="forgotPasswordPage__header--icon" src="src/assets/logo.png" alt="Logo" />
                        <h1 className="forgotPasswordPage__header--content">Forgot password</h1>
                    </div>

                    <div className="forgotPasswordPage__emailBox">
                        <div className="forgotPasswordPage__inputContainer forgotPasswordPage__inputContainer--username">
                            <div className="forgotPasswordPage__inputBox">
                                <i className="fa-regular fa-envelope inputUsernameIcon"></i>
                                <input className="forgotPasswordPage__input" type="text" onChange={(e) => setGmail(e.target.value)} value={gmail} disabled={verifystate} placeholder="Enter your gmail..." />
                            </div>

                            <p className="forgotPasswordPage__announce">{errorGmail}</p>
                        </div>

                        {!verifystate && (
                            <button className="forgotPasswordPage__btn forgotPasswordPage__btn--sendVerify" onClick={handleGmail}>Send verify</button>
                        )}
                    </div>

                    {verifystate && (
                        <div className="forgotPasswordPage__verifyBox">
                            <div className="forgotPasswordPage__inputContainer forgotPasswordPage__inputContainer--username">
                                <div className="forgotPasswordPage__inputBox">
                                    <i className="fa-solid fa-fingerprint inputUsernameIcon"></i>
                                    <input className="forgotPasswordPage__input" type="text" placeholder="Enter verify code..." />
                                </div>

                                <p className="forgotPasswordPage__announce">{errorVerify}</p>
                            </div>

                            <button className="forgotPasswordPage__btn forgotPasswordPage__btn--getPassword">Get password</button>
                        </div>
                    )}


                    <div className="forgotPasswordPage__backToSignIn">
                        <a href="#" className="forgotPasswordPage__backToSignIn__link">Back to Sign In</a>
                    </div>
                </div>
            </div>
        </IonPage>
    )
}

export default ForgotPassword