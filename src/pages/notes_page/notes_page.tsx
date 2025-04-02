// Import library
import { IonPage, IonContent } from "@ionic/react";
import React, { useState } from "react";

// Import components
import NoteEditor from "./notesEditor/Note_editors";

// Import css
import "./notes_page.css"
import "../../main.css"

const NotesPage: React.FC = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleNoteClick = () => {
    setIsEditorOpen(true);
  };

  const handleBackClick = () => {
    setIsEditorOpen(false);
  };
  
//component level state
  if (isEditorOpen) {
    return <NoteEditor onBack={handleBackClick} />;
  }

  return (
    <IonPage>
      <IonContent>
        {/* Header Container */}
        <div className="notes--container">
          <div className="notes__header">
            <button className="notes__back--button">
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <h1 className="notes__title">Notes</h1>
          </div>

          {/* Notes Grid */}
          <div className="notes__grid">
            <div className="notes__item" onClick={handleNoteClick}>
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            <div className="notes__item">
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            <div className="notes__item">
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            <div className="notes__item">
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            <div className="notes__item">
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            <div className="notes__item">
              <img 
                src="src/assets/note_icon.png" 
                alt="Note" 
                className="notes__item--icon"
              />
              <span className="notes__item--label">Note Name</span>
            </div>

            {/* ... Dynamic? Soon ... */}
          </div>

          {/* Add Note Button */}
          <button className="notes__add--button">
            <i className="fa-solid fa-plus notes__fab--button"></i>
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotesPage;