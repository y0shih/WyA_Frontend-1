// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./dashboard_page.css"
import "../../main.css"

const DashboardPage:React.FC = () => (
    // State

    // Error

    // Data

    // Handlers

    <IonPage>
        <div className="dashboard__page">
            <div className="dashboard__profileCard--container">
                <div className="dashboard__profileCard__card">
                    <div className="dashboard__profileCard__imgBox">
                        <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" className="dashboard__profileCard__imgBox--img" alt="User avartar" />
                    </div>

                    <div className="dashboard__profileCard__infoBox">
                        <h3 className="dashboard__profileCard__infoBox--username">Username</h3>
                        <p className="dashboard__profileCard__infoBox--gmail">duytran.290804@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="dashboard__menu">
                <div className="dashboard__menu__titleBox">
                    <h3 className="dashboard__menu__titleBox--title">dashboard</h3>
                </div>

                <div className="dashboard__menu__listFuncs">
                    <div className="dashboard__menu__func dashboard__menu__func">
                        <img src="src/assets/dashboard_map_icon.png" className="dashboard__menu__func--icon" alt="Icon function" />
                        <p className="dashboard__menu__func--title">Map</p>
                    </div>

                    <div className="dashboard__menu__func dashboard__menu__func">
                        <img src="src/assets/dashboard_chat_icon.png" className="dashboard__menu__func--icon" alt="Icon function" />
                        <p className="dashboard__menu__func--title">Chat</p>
                    </div>

                    <div className="dashboard__menu__func dashboard__menu__func">
                        <img src="src/assets/dashboard_todo_icon.png" className="dashboard__menu__func--icon" alt="Icon function" />
                        <p className="dashboard__menu__func--title">Todo</p>
                    </div>

                    <div className="dashboard__menu__func dashboard__menu__func">
                        <img src="src/assets/dashboard_aboutus_icon.png" className="dashboard__menu__func--icon" alt="Icon function" />
                        <p className="dashboard__menu__func--title">About</p>
                    </div>

                    <div className="dashboard__menu__func dashboard__menu__func">
                        <img src="src/assets/dashboard_contactus_icon.png" className="dashboard__menu__func--icon" alt="Icon function" />
                        <p className="dashboard__menu__func--title">Contact</p>
                    </div>

                </div>
            </div>
        </div>
    </IonPage>
)

export default DashboardPage