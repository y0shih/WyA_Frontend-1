// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./profile_page.css"
import "../../main.css"

const ProfilePage: React.FC = () => (
    <IonPage>
        <div className="settings">
            <div className="settings__header">
                <button className="settings__back--button">
                    <i className="fa-solid fa-caret-left settings__back-icon"></i>
                    Setting
                </button>
            </div>

            <div className="settings__content">
                <button className="settings__item">
                    <i className="fa-solid fa-user-pen settings__item--icon"></i>
                    <span className="settings__item--text">Change your name</span>
                </button>

                <button className="settings__item">
                    <i className="fa-solid fa-envelope settings__item--icon"></i>
                    <span className="settings__item--text">Change your gmail</span>
                </button>

                <button className="settings__item">
                    <i className="fa-solid fa-lock settings__item--icon"></i>
                    <span className="settings__item--text">Change your password</span>
                </button>

                <button className="settings__item">
                    <i className="fa-solid fa-palette settings__item--icon"></i>
                    <span className="settings__item--text">Change your theme</span>
                </button>

                <button className="settings__item settings__item--delete">
                    <i className="fa-solid fa-trash settings__item--icon"></i>
                    <span className="settings__item-text settings__item--textdelete">Delete the account</span>
                </button>
            </div>
        </div>
    </IonPage>
)

export default ProfilePage