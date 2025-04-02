// Import library
import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";

// Import components

// Import css
import "./login_page.css"
import "../../main.css"

export default function LoginPage() {
    // State
    const [hidepassword, setHidepassword] = useState(true);
    const [checkData, setCheckData] = useState<boolean>(true)

    // Data
    const [gmail, setGmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    // Error
    const [errorGmail, setErrorGmail] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<string>("")

    // Handler
    const checkGmail = (gmail : string) => {
        let returnError = ""
        if(gmail === "") {
            returnError = "Please enter your gmail"
            setCheckData(false)
        } else {
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
            if (!gmailRegex.test(gmail)) {
                returnError = "Invalid email format"
            }
        }

        if (returnError == "") setCheckData(true)

        setErrorGmail(returnError)
    }

    useEffect(() => {
        checkGmail(gmail)
    }, [gmail])

    // 
    const checkPassword = (password : string) => {
        let returnError = ""
        if(password == "") {
            returnError = "Please enter your gmail"
        }

        if (returnError == "") setCheckData(true)

        setErrorPassword(returnError)
    }

    useEffect(() => {
        checkPassword(password)
    }, [password])

    const toggleTypePassword = () => setHidepassword(!hidepassword);

    return (
        <IonPage>
            <div className="loginPage">
                <div className="loginPage__loginForm">
                    <div className="loginPage__element loginPage__element--headerBox">
                        <img className="loginPage__header--icon" src= "src/assets/logo.png" alt="Logo" />
                        <h1 className="loginPage__header--content">Welcome to WyA</h1>
                    </div>
    
                    <div className="loginPage__element loginPage__element--inputForm">
                        <div className="loginPage__inputContainer loginPage__inputContainer--username">
                            <div className="loginPage__inputBox">
                                <i className="fa-regular fa-envelope inputUsernameIcon"></i>
                                <input className="loginPage__input" type="text" onChange={(e) => {setGmail(e.target.value)}} value={gmail} placeholder="Gmail..." />
                            </div>
    
                            <p className="loginPage__announce">{errorGmail}</p>
                        </div>
    
                        <div className="loginPage__inputContainer loginPage__inputContainer--password">
                            <div className="loginPage__inputBox">
                                <i className="fa-solid fa-fingerprint inputPasswordIcon"></i>
                                <input className="loginPage__input" type={hidepassword ? "password" : "text"} onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder="Password..." />
                                <i className="fa-solid fa-eye" onClick={toggleTypePassword}></i>
                            </div>
    
                            <p className="loginPage__announce">{errorPassword}</p>
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