// Import library
import { IonPage } from "@ionic/react";
import React from "react";

// Import components

// Import css
import "./starter_page.css"
import "../../main.css"

const StarterPage:React.FC = () => (
    <IonPage>
        <div className="starterpage">
            <div className="starterpage__element starterpage__element--logoShowcase">
                <img className="starterpage__element__logo" src="public/assets/logo.png" alt="no image" />
                <h4 className="starterpage__element__slogan">find your friends</h4>
            </div>

            <div className="starterpage__element starterpage__element--loadingAssets">
                <p className="starterpage__element--loading">Loading assets...</p>
            </div>

        </div>
    </IonPage>
)

export default StarterPage