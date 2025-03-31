// Import library
import { IonPage, IonContent } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./about_page.css"
import "../../main.css"

const AboutPage: React.FC = () => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/assets/error.jpg";  // error handler 
  };

  return (
    <IonPage>
      <IonContent>
        {/* Profile Container */}
        <div className="profile--container">
          <div className="dashboard__profile">
            <img 
              src="/assets/profile-pic.png" 
              alt="Profile" 
              className="dashboard__avatar" 
              onError={handleImageError}
            />
            <div className="dashboard__user--info">
              <span className="dashboard__username">abc</span>
              <span className="dashboard__email">loz@gmail.com</span>
            </div>
            <button className="dashboard__menu--button">...</button>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="dashboard--container">
          <div className="dashboard">
            <div className="dashboard__header">
              <h1 className="dashboard__title">Dashboard</h1>
            </div>

            <div className="dashboard__grid">
              <div className="dashboard__item">
                <img 
                  src="/assets/map_icon.png" 
                  alt="Map" 
                  className="dashboard__item--icon" 
                  onError={handleImageError}
                />
                <span className="dashboard__item--label">Map</span>
              </div>
              <div className="dashboard__item">
                <img 
                  src="/assets/chatting_icon.png" 
                  alt="Chat" 
                  className="dashboard__item--icon" 
                  onError={handleImageError}
                />
                <span className="dashboard__item--label">Chat</span>
              </div>
              <div className="dashboard__item">
                <img 
                  src="/assets/todolist_icon.png" 
                  alt="Todo" 
                  className="dashboard__item--icon" 
                  onError={handleImageError}
                />
                <span className="dashboard__item--label">Todo</span>
              </div>
              <div className="dashboard__item">
                <img 
                  src="/assets/aboutus_icon.png" 
                  alt="About us" 
                  className="dashboard__item--icon" 
                  onError={handleImageError}
                />
                <span className="dashboard__item--label">About us</span>
              </div>
              <div className="dashboard__item">
                <img 
                  src="/assets/contact_icon.png" 
                  alt="Contact us" 
                  className="dashboard__item--icon" 
                  onError={handleImageError}
                />
                <span className="dashboard__item--label">Contact us</span>
              </div>
            </div>
            <button className="dashboard__signout--button">Sign out my account</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage