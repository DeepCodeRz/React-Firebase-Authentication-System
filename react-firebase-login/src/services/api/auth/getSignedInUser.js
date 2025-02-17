import {auth} from "../firebaseConfig.js"
import {onAuthStateChanged} from "firebase/auth"

export function getSignedInUser(auth, callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            callback({ signedIn: true, uid });
        } else {
            callback({ signedIn: false });
        }
    });
}