// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./contact_page.css"
import "../../main.css"

const ContactPage: React.FC = () => (
    <IonPage>
        <div className="contact">
            <div className="contact__header">
                <button className="contact__back--button">
                    <i className="fa-solid fa-caret-left contact__back--icon"></i>
                    Contact us
                </button>
            </div>
            
            <div className="contact__form--container">
                <input 
                    type="text" 
                    className="contact__input"
                    placeholder="Topic's problem"
                />
                
                <textarea 
                    className="contact__textarea"
                    placeholder="Write your problem and send it to us..."
                />
            </div>
            
            <div className="contact__button--container">
                <button className="contact__send--button">
                    <i className="fa-regular fa-envelope contact__send--icon"></i>
                    SEND
                </button>
            </div>
        </div>
    </IonPage>
)

export default ContactPage