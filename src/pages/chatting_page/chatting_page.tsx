// Import library
import { IonPage } from "@ionic/react";
import React from "react";

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
  
  const [friendRequests, setFriendRequests] = React.useState<FriendRequest[]>([
    {
      id: '1',
      name: 'Yeezy',
      avatar: '/path-to-avatar.png',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Travis',
      avatar: '/path-to-avatar.png',
      status: 'pending'
    }
  ]);

  const [friends, setFriends] = React.useState<Friend[]>([
    {
      id: '1',
      name: 'Playboi Carti',
      avatar: '/path-to-avatar.png',
      lastMessage: 'SCHEYYAH',
      lastMessageTime: '2:30 PM'
    },
    {
      id: '2',
      name: 'Drake',
      avatar: '/path-to-avatar.png',
      lastMessage: "God's Plan",
      lastMessageTime: '1:45 PM'
    }
  ]);

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

  return (
    <IonPage>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__search">
            <button className="chat__button--back">
              <i className="fa-solid fa-caret-left chat__icon--back"></i>
            </button>
            <input 
              type="text" 
              className="chat__input--search" 
              placeholder="Find your friend..." 
            />
            <div className="chat__avatar--profile">
              <img src="/path-to-your-avatar.png" alt="" />
            </div>
          </div>
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