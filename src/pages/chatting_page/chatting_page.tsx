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
  status: 'pending' | 'accepted' | 'declined';
}

interface Friend extends User {
  lastMessage: string;
  lastMessageTime: string;
}


//Sample data :) 
const ChattingPage: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [friendRequests, setFriendRequests] = React.useState<FriendRequest[]>([
    {
      id: 'req_1',
      name: 'Yeezy',
      avatar: '/path-to-avatar.png',
      status: 'pending'
    },
    {
      id: 'req_2',
      name: 'Travis',
      avatar: '/path-to-avatar.png',
      status: 'pending'
    }
  ]);

  const [friends, setFriends] = React.useState<Friend[]>([
    {
      id: 'friend_1',
      name: 'Playboi Carti',
      avatar: '/path-to-avatar.png',
      lastMessage: 'SCHEYYAH',
      lastMessageTime: '2:30 PM'
    },
    {
      id: 'friend_2',
      name: 'Drake',
      avatar: '/path-to-avatar.png',
      lastMessage: "God's Plan",
      lastMessageTime: '1:45 PM'
    }
  ]);

  const allUsers = [...friends, ...friendRequests].map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    isRequested: 'status' in user
  }));

  const handleRequestAction = (requestId: string, action: 'accept' | 'decline') => {
    setFriendRequests(prev => prev.map(request => 
      request.id === requestId 
        ? { ...request, status: action === 'accept' ? 'accepted' : 'declined' }
        : request
    ));

    if (action === 'accept') {
      const acceptedRequest = friendRequests.find(req => req.id === requestId);
      if (acceptedRequest) {
        setFriends(prev => [...prev, {
          id: acceptedRequest.id,
          name: acceptedRequest.name,
          avatar: acceptedRequest.avatar,
          lastMessage: 'New friend added!',
          lastMessageTime: new Date().toLocaleTimeString()
        }]);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <IonPage>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__search">
            <button className="chat__button--back">
              <i className="fa-solid fa-caret-left chat__icon--back"></i>
            </button>
            <div 
              ref={searchRef}
              className="chat__input--search" 
            >
              <input
                type="text"
                placeholder="Find your friend..."
                onFocus={() => setIsSearchActive(true)}
              />
              {isSearchActive && (
                <div className="chat__search--popup">
                  {allUsers.map(user => (
                    <div key={user.id} className="chat__search--item">
                      <div className="chat__search--user">
                        <div className="chat__avatar--user">
                          <img src={user.avatar} alt={user.name} />
                        </div>
                        <span className="chat__name--usersearch">{user.name}</span>
                      </div>
                      <button className="chat__button--request">
                        {user.isRequested ? 'Pending' : 'Request'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="chat__avatar--profile">
              <img src="/path-to-your-avatar.png" alt="" />
            </div>
          </div>
          
          {isSearchActive && (
            <div className="chat__search--popup">
              {allUsers.map(user => (
                <div key={user.id} className="chat__search--item">
                  <div className="chat__search--user">
                    <div className="chat__avatar--user">
                      <img src={user.avatar} alt={user.name} />
                    </div>
                    <span className="chat__name--usersearch">{user.name}</span>
                  </div>
                  <button className="chat__button--request">
                    {user.isRequested ? 'Pending' : 'Request'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="chat__content">
          {/* Friend Requests Section */}
          {friendRequests.length > 0 && (
            <div className="chat__section">
              <h2 className="chat__title--section">Request ({friendRequests.length})</h2>
              <div className="chat__container">
                {friendRequests.map(request => (
                  <div key={request.id} className="chat__item--request">
                    <div className="chat__user">
                      <div className="chat__avatar--user">
                        <img src={request.avatar} alt={request.name} />
                      </div>
                      <span className="chat__name--user">{request.name}</span>
                    </div>
                    <div className="chat__actions">
                      <button 
                        className="chat__button--decline"
                        onClick={() => handleRequestAction(request.id, 'decline')}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <button 
                        className="chat__button--accept"
                        onClick={() => handleRequestAction(request.id, 'accept')}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Friends List Section */}
          <div className="chat__section">
            <h2 className="chat__title--section">Friends ({friends.length})</h2>
            <div className="chat__container">
              {friends.map(friend => (
                <div key={friend.id} className="chat__item--friend">
                  <div className="chat__user">
                    <div className="chat__avatar--user">
                      <img src={friend.avatar} alt={friend.name} />
                    </div>
                    <div className="chat__info--user">
                      <span className="chat__name--user">{friend.name}</span>
                      <span className="chat__message--last">Last message: {friend.lastMessage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default ChattingPage;