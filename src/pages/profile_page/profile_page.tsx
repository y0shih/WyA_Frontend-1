// Import library
import { IonPage } from "@ionic/react";
import React, { useState, useRef, useEffect } from "react";

// Import components

// Import css
import "./profile_page.css"
import "../../main.css"

const ProfilePage: React.FC = () => {
    // Modal states
    const [activeModal, setActiveModal] = useState<'name' | 'email' | 'password' | 'delete' | null>(null);
    
    // Input states
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    
    const modalRef = useRef<HTMLDivElement>(null);

    // Input handlers
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        if (activeModal) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [activeModal]);

    const closeModal = () => {
        setActiveModal(null);
        setNewName("");
        setNewPassword("");
        setNewEmail("");
    };

    const handleSubmit = () => {
        switch (activeModal) {
            case 'name':
                console.log("New name:", newName);
                console.log("Verification password:", newPassword);
                break;
            case 'email':
                console.log("New email:", newEmail);
                console.log("Verification password:", newPassword);
                break;
            case 'password':
                console.log("New password:", newPassword);
                break;
            case 'delete':
                console.log("Account deletion confirmed");
                break;
        }
        closeModal();
    };

    const renderModalContent = () => {
        switch (activeModal) {
            case 'name':
                return (
                    <>
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
                                placeholder="Verify password..."
                                value={newPassword}
                                onChange={handlePasswordChange}
                                className="modal__input"
                            />
                        </div>
                    </>
                );
            case 'email':
                return (
                    <>
                        <div className="modal__input-group">
                            <i className="fa-solid fa-envelope modal__icon"></i>
                            <input
                                type="email"
                                placeholder="New email..."
                                value={newEmail}
                                onChange={handleEmailChange}
                                className="modal__input"
                            />
                        </div>

                        <div className="modal__input-group">
                            <i className="fa-solid fa-fingerprint modal__icon"></i>
                            <input
                                type="password"
                                placeholder="Verify password..."
                                value={newPassword}
                                onChange={handlePasswordChange}
                                className="modal__input"
                            />
                        </div>
                    </>
                );
            case 'password':
                return (
                    <>
                        <div className="modal__input-group">
                            <i className="fa-solid fa-lock modal__icon"></i>
                            <input
                                type="password"
                                placeholder="Password..."
                                value={newPassword}
                                onChange={handlePasswordChange}
                                className="modal__input"
                            />
                        </div>

                        <div className="modal__input-group">
                            <i className="fa-solid fa-fingerprint modal__icon"></i>
                            <input
                                type="password"
                                placeholder="Confirm password..."
                                className="modal__input"
                            />
                        </div>

                        <div className="modal__input-group">
                            <i className="fa-solid fa-fingerprint modal__icon"></i>
                            <input
                                type="password"
                                placeholder="Verify password..."
                                className="modal__input"
                            />
                        </div>
                    </>
                );
            case 'delete':
                return (
                    <div className="modal__delete">
                        <h2 className="modal__title">YOUR DECISION</h2>
                        <div className="modal__verify-code">
                            <input
                                type="text"
                                placeholder="Verify code"
                                className="modal__input modal__input--verify"
                            />
                        </div>
                        <div className="modal__actions">

                            <button 
                                className="modal__button modal__button--cancel"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            
                            <button 
                                className="modal__button modal__button--delete"
                                onClick={handleSubmit}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
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
                    <button className="settings__item" onClick={() => setActiveModal("name")}>
                        <i className="fa-solid fa-user-pen settings__item--icon"></i>
                        <span className="settings__item--text">Change your name</span>
                    </button>

                    <button className="settings__item" onClick={() => setActiveModal("email")}>
                        <i className="fa-solid fa-envelope settings__item--icon"></i>
                        <span className="settings__item--text">Change your gmail</span>
                    </button>

                    <button className="settings__item" onClick={() => setActiveModal("password")}>
                        <i className="fa-solid fa-lock settings__item--icon"></i>
                        <span className="settings__item--text">Change your password</span>
                    </button>

                    <button className="settings__item">
                        <i className="fa-solid fa-palette settings__item--icon"></i>
                        <span className="settings__item--text">Change your theme</span>
                    </button>

                    <button 
                        className="settings__item settings__item--delete"
                        onClick={() => setActiveModal('delete')}
                    >
                        <i className="fa-solid fa-trash settings__item--icon"></i>
                        <span className="settings__item-text settings__item--textdelete">Delete the account</span>
                    </button>
                </div>

                {/* Modal */}
                {activeModal && (
                    <div className="modal">
                        <div className="modal__content" ref={modalRef}>
                            {renderModalContent()}
                            {/* Show Apply button only for non-delete modals */}
                            {activeModal !== 'delete' && (
                                <button 
                                    className="modal__button"
                                    onClick={handleSubmit}
                                >
                                    Apply
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </IonPage>
    );
};

export default ProfilePage;