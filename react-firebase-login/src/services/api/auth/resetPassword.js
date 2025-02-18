import { auth } from '../firebaseConfig.js';
import { sendPasswordResetEmail } from "firebase/auth";

export const passwordResetEmail = (email, setIsPasswordResetEmailSent ) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsPasswordResetEmailSent(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}