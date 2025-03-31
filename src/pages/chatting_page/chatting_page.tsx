// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./chatting_page.css"
import "../../main.css"

const ChattingPage: React.FC = () => {
  return (
    <IonPage>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__search">
            <button className="chat__back-button">
              <span className="chat__back-icon"></span>
            </button>
            <input 
              type="text" 
              className="chat__search-input" 
              placeholder="Find your friend..." 
            />
            <div className="chat__profile-avatar"></div>
          </div>
        </div>

        <div className="chat__content">
          <div className="chat__section">
            <h2 className="chat__section-title">Request (2)</h2>
            <div className="chat__request-list">
              {/* This will be mapped from request data */}
              <div className="chat__request-item">
                <div className="chat__user">
                  <div className="chat__user-avatar"></div>
                  <span className="chat__user-name">Mỹ Uyên</span>
                </div>
                <div className="chat__actions">
                  <button className="chat__action chat__action--decline"></button>
                  <button className="chat__action chat__action--accept"></button>
                </div>
              </div>
            </div>
          </div>

          <div className="chat__section">
            <h2 className="chat__section-title">Friends (5)</h2>
            <div className="chat__friends-list">
              {/* This will be mapped from database dynamically */}
              <div className="chat__friend-item">
                <div className="chat__user">
                  <div className="chat__user-avatar"></div>
                  <div className="chat__user-info">
                    <span className="chat__user-name">TuongDuy</span>
                    <span className="chat__last-message">Last message: ...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default ChattingPage;