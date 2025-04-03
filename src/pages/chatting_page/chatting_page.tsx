// Import library
import { IonPage } from "@ionic/react";
import React, { useState, useRef, useEffect } from "react";

// Import components

// Import css
import "./chatting_page.css"
import "../../main.css"

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface FriendRequest extends User {
  status: "accepted" | "declined";
}

interface Friend extends User {
  lastMessage: string;
  lastMessageTime: string;
}


//Sample data :) 
const ChattingPage: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchPopupRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSearchActive(true);
    console.log("Search clicked, isSearchActive:", isSearchActive);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (searchPopupRef.current && !searchPopupRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    };

    if (isSearchActive) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isSearchActive]);

  return (
    <IonPage>
      <div className="chat">
        <div className="chat__header">
          <div className={`chat__search ${!isSearchActive ? "allBorder" : ""}`}>
            <button className="chat__button--back">
              <i className="fa-solid fa-caret-left chat__icon--back"></i>
            </button>

            <div className="chat__input--search" onClick={handleSearchClick}>
              <input type="text" placeholder="Find your friend..." onClick={handleSearchClick} />
            </div>

            <div className="chat__avatar--profile">
              <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="Avatar User" />
            </div>
          </div>

          {isSearchActive && (
            <div className="chat__search--popup" ref={searchPopupRef}>
              <div className="chat__search--item">
                <div className="chat__search--user">
                  <div className="chat__avatar--user">
                    <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="Avatar User" />
                  </div>

                  <p className="chat__name--usersearch">Username</p>
                </div>

                <button className="chat__button--request">Request</button>
              </div>
            </div>
          )}
        </div>

        <div className="chat__content">
          {/* Friend Requests Section */}
          <div className="chat__section">
            <h2 className="chat__title--section">Request (number)</h2>
            <div className="chat__container">
              <div className="chat__item--request">
                <div className="chat__user">
                  <div className="chat__avatar--user">
                    <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="Avatar User" />
                  </div>

                  <p className="chat__name--user">username</p>
                </div>

                <div className="chat__actions">

                  <button className="chat__button--decline" >
                    <i className="fa-solid fa-xmark"></i>
                  </button>

                  <button className="chat__button--accept">
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Friends List Section */}
          <div className="chat__section">
            <h2 className="chat__title--section">Friends (number)</h2>
            <div className="chat__container">
              <div className="chat__item--friend">
                <div className="chat__user">
                  <div className="chat__avatar--user">
                    <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="User avatar" />
                  </div>

                  <div className="chat__info--user">
                    <p className="chat__name--user">username</p>

                    <div className="chat__message--container">
                      <p className="chat__message--label">Last message: </p>
                      <p className="chat__message--text">Last message:</p>
                    </div>
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