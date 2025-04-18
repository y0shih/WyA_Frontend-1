// Import libraries
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
import { spring } from "motion";

// Import component
import "./register__verifyAccount.css"

// Import services
import createAccount from "../../services/create_account.serv";
import verifyOTP from "../../services/verifyOTP.serv";

// Import custom hooks
import { useToast } from "../toastMessage/toast";
import { useSpinner } from "../spinner/spinner";

// Import interface
import { interface__CreateAccount } from "../../types/interface__CreateAccount";
import { interface__Verification__callback } from "../../types/interface__Verification";

// Component
const Register__verifyAccount: React.FC<{ data: interface__CreateAccount, closeVerification: interface__Verification__callback }> = ({ data, closeVerification }) => {
    // Custom hooks
    const { addToast } = useToast()
    const { openSpinner, closeSpinner } = useSpinner()

    // Input Data
    const [inputCode, setInputCode] = useState(["", "", "", ""])
    const inputRef = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ]

    // Handler
    const handleClose = () => {
        closeVerification(false)
    }

    const handleInputCode = (index: number, inputData: string) => {
        const updateCode = [...inputCode]
        updateCode[index] = inputData
        setInputCode(updateCode)

        if (index < inputRef.length - 1) inputRef[index + 1].current?.focus()
    }

    useEffect(() => {
        (async () => {
            if (!inputCode.includes("")) {
                openSpinner()
                await verifyOTP({ inputOtp: [...inputCode].join("") }).then(async (verify_res) => {
                    if (verify_res.status == 200) {
                        await createAccount(data).then((createAccount_res) => {
                            closeSpinner()
                            if (createAccount_res.status == 200) {
                                addToast({
                                    typeToast: "s",
                                    content: createAccount_res.data.mess,
                                    duration: 5
                                })
                                handleClose()
                            } else {
                                addToast({
                                    typeToast: "e",
                                    content: createAccount_res.data.mess,
                                    duration: 5
                                })
                            }
                        }).catch((err) => { throw new Error(err) })

                    } else {
                        addToast({
                            typeToast: "e",
                            content: verify_res.data.mess,
                            duration: 5
                        })
                    }
                }).catch((err) => { throw new Error(err) })
            }
        })()
    }, [inputCode])

    return (
        <motion.div
            className="verification"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="verification__form"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ spring, duration: 0.3, delay: 0.3 }}
            >
                <h1 className="verification__form--title">Verification</h1>
                <p className="verification__form--note">Please enter the code we sent to your gmail.</p>
                <div className="verification__form__inputContainer">
                    {inputRef.map((ref, index) => (
                        <input
                            key={index}
                            ref={ref}
                            type="number"
                            className="verification__form__inputContainer--form--input"
                            value={inputCode[index]}
                            onChange={(e) => { handleInputCode(index, e.target.value) }}
                        />
                    ))}
                </div>

                <button className="verification__form--closeBtn" onClick={handleClose}>close</button>
            </motion.div>
        </motion.div>
    )
}

export default Register__verifyAccount