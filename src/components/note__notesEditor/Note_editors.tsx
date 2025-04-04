// Import library
import { IonPage, IonContent } from "@ionic/react";
import React from "react";

// Import css
import "./Note_editors.css";
import "../../main.css";

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
        <div className="editor__container">
          <div className="editor__header">
            <button className="editor__button--back" onClick={onBack}>
              <i className="fa-solid fa-caret-left"></i>
            </button>

            <div className="editor__user--info">
              <img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="Profile" className="editor__user--avatar"/>
              <span className="editor__user--username">Mỹ Uyên</span>
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
            <input type="text" className="editor__topic" placeholder="Topic..." />
            <textarea className="editor__note" placeholder="Write your note right here..."></textarea>
          </div>

          <div className="editor__footer">
            <span className="editor__last--update"><b>Last update:</b> 27 THG 03, 2025</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NoteEditor;
