// Import library
import { IonPage } from "@ionic/react";
import React, { useState } from "react";

// Import components

// Import css
import "./profile_page.css"
import "../../main.css"

const ProfilePage: React.FC = () => {
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = () => {
        // Handle both name and password change logic here
        console.log("New name:", newName);
        console.log("New password:", newPassword);
        
        // Reset the form
        setNewName("");
        setNewPassword("");
        setIsNameModalOpen(false);
    };

    return (
        <IonPage>
            <div className="settings">
                <div className="settings__header">
                    <button className="settings__back--button">
                        <i className="fa-solid fa-caret-left settings__back-icon"></i>
                        Setting
                    </button>
                </div>

                <div className="settings__content">
                    <button 
                        className="settings__item"
                        onClick={() => setIsNameModalOpen(true)}
                    >
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

                {/* Name Change Modal */}
                {isNameModalOpen && (
                    <div className="modal">
                        <div className="modal__content">
                            <div className="modal__input-group">
                                <i className="fa-solid fa-user-pen modal__icon"></i>
                                <input
                                    type="text"
                                    placeholder="New name..."
                                    value={newName}
                                    onChange={handleNameChange}
                                    className="modal__input"
                                />
                            </div>
                            <div className="modal__input-group">
                                <i className="fa-solid fa-fingerprint modal__icon"></i>
                                <input
                                    type="password"
                                    placeholder="New password..."
                                    value={newPassword}
                                    onChange={handlePasswordChange}
                                    className="modal__input"
                                />
                            </div>
                            <button 
                                className="modal__button"
                                onClick={handleSubmit}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </IonPage>
    );
};

export default ProfilePage;