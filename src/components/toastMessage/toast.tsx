import React from "react";
import "./toast.css"

// Import interface
import { interface__toast } from "../../types/interface__Toast";

// Import component


const Toast: React.FC<interface__toast> = ({ typeToast, content, duration }) => {
    // State

    // Style
    const style = {
        '--toast-duration': `${duration}s`,  
    } as React.CSSProperties & { '--toast-duration'?: string };

    const typeOfToast: Record<string, string> = {
        s: "fa-solid fa-check",
        e: "fa-solid fa-xmark",
        i: "fa-solid fa-info",
        w: "fa-solid fa-exclamation"
    }

    return (
        <div className="toastContainer">
            <div className={`toast ${typeToast}`} style={style}>
                <div className="toast__iconBox">
                    <i className={typeOfToast[typeToast]}></i>
                </div>

                <div className="toast__messsageBox">
                    <p className="toast__messsageBox--showMessage">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast