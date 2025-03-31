// Import library
import { IonPage, IonContent } from "@ionic/react";
import React from "react";

// Import css
import "./Note_editors.css";
import "../../../main.css";

interface NoteEditorProps {
  onBack: () => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onBack }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/assets/error.jpg";
  };

  return (
    <IonPage>
      <IonContent>
        <div className="editor--container">
          <div className="editor__header">
            <button className="editor__back--button" onClick={onBack}>
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <div className="editor__user-info">
              <img 
                src="/assets/profile-pic.png" 
                alt="Profile" 
                className="editor__avatar"
                onError={handleImageError}
              />
              <span className="editor__username">Mỹ Uyên</span>
            </div>
            <div className="editor__actions">
              <button className="editor__action--button editor__action--cancel" onClick={onBack}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button className="editor__action--button editor__action--save">
                <i className="fa-solid fa-check"></i>
              </button>
            </div>
          </div>

          <div className="editor__content">
            <input 
              type="text" 
              className="editor__topic" 
              placeholder="Topic..."
            />
            <textarea 
              className="editor__note" 
              placeholder="Write your note right here..."
            ></textarea>
          </div>

          <div className="editor__footer">
            <span className="editor__last-update">Last update: 27 THG 03, 2025</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NoteEditor;
