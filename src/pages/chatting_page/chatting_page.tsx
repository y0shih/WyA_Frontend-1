// Import library
import { IonPage } from "@ionic/react";
import React, { useState, useRef, useEffect } from "react";

// Import components
import Chatbox from "./Chatbox/chatting_Chatbox";
// Import css
import "./chatting_page.css"
import "../../main.css"

/**
 * Main chat page component that handles friends list and chat interface
 */
const ChattingPage: React.FC = () => {
  // State for managing chat navigation and UI
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchPopupRef = useRef<HTMLDivElement>(null);

  // Type definitions for user data
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

  // Sample data for friend requests
  const [friendRequests] = React.useState<FriendRequest[]>([
    {
      id: 'req_1',
      name: 'Yeezy',
      avatar: '/path-to-avatar.png',
      status: 'accepted'
    },
    {
      id: 'req_2',
      name: 'Travis',
      avatar: '/path-to-avatar.png',
      status: 'declined'
    }
  ]);

  // Sample data for friends list
  const [friends] = React.useState<Friend[]>([
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

  // Combine friends and requests for search functionality
  const allUsers = [...friends, ...friendRequests].map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar
  }));

  /**
   * Handles friend request actions (accept/decline)
   * @param requestId - ID of the friend request
   * @param action - 'accept' or 'decline'
   */
  // Not implemented yet
  // const handleRequestAction = (requestId: string, action: 'accept' | 'decline') => {
  //   // Update request status
  //   setFriendRequests(prev => prev.map(request => 
  //     request.id === requestId 
  //       ? { ...request, status: action === 'accept' ? 'accepted' : 'declined' }
  //       : request
  //   ));

  //   // If accepted, add to friends list
  //   if (action === 'accept') {
  //     const acceptedRequest = friendRequests.find(req => req.id === requestId);
  //     if (acceptedRequest) {
  //       setFriends(prev => [...prev, {
  //         id: acceptedRequest.id,
  //         name: acceptedRequest.name,
  //         avatar: acceptedRequest.avatar,
  //         lastMessage: 'New friend added!',
  //         lastMessageTime: new Date().toLocaleTimeString()
  //       }]);
  //     }
  //   }
  // };

  /**
   * Handles search popup activation
   */
  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSearchActive(true);
    console.log("Search clicked, isSearchActive:", isSearchActive);
  };

  /**
   * Opens chat with selected friend
   */
  const handleChatboxClick = (friend: Friend) => {
    setSelectedFriend(friend);
    setIsChatboxOpen(true);
  };

  const handleBackClick = () => {
    setIsChatboxOpen(false);
    setSelectedFriend(null);
  };

  // Close search popup when clicking outside
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

  // Render chat interface if a friend is selected
  if (isChatboxOpen && selectedFriend) {
    return <Chatbox onBack={handleBackClick} friend={selectedFriend} />;
  }

  // Main render for friends list view
  return (
    <IonPage>
      <div className="chat">
        {/* Header with search and profile */}
        <div className="chat__header">
          <div className="chat__search">
            <button className="chat__button--back">
              <i className="fa-solid fa-caret-left chat__icon--back"></i>
            </button>
            
            <div 
              className="chat__input--search" 
              onClick={handleSearchClick}
            >
              <input
                type="text"
                placeholder="Find your friend..."
                onClick={handleSearchClick}
              />
            </div>

            <div className="chat__avatar--profile">
              <img src="/avatar.png" alt="" />
            </div>
          </div>
          
          {/* Search popup */}
          {isSearchActive && (
            <div className="chat__search--popup" ref={searchPopupRef}>
              {allUsers.map(user => (
                <div key={user.id} className="chat__search--item">
                  <div className="chat__search--user">
                    <div className="chat__avatar--user">
                      <img src={user.avatar} alt={user.name} />
                    </div>
                    <span className="chat__name--usersearch">{user.name}</span>
                  </div>
                  <button className="chat__button--request">
                    Request
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
                        // onClick={() => handleRequestAction(request.id, 'decline')}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <button 
                        className="chat__button--accept"
                        // onClick={() => handleRequestAction(request.id, 'accept')}
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
                <div 
                  key={friend.id} 
                  className="chat__item--friend"
                  onClick={() => handleChatboxClick(friend)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="chat__user">
                    <div className="chat__avatar--user">
                      <img src={friend.avatar} alt={friend.name} />
                    </div>
                    <div className="chat__info--user">
                      <span className="chat__name--user">{friend.name}</span>
                      <div className="chat__message--container">
                        <span className="chat__message--label">Last message: </span>
                        <span className="chat__message--text">{friend.lastMessage}</span>
                      </div>
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