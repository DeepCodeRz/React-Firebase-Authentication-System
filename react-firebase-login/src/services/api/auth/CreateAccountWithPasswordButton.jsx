import { auth } from '../firebaseConfig.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"; // sendEmailVerification modüler olarak import edildi
import { useNavigate } from 'react-router';
import { Toaster, toast } from 'sonner'
import { getErrorMessage } from '../../../utils/firebaseErrors';

export default function CreateAccountWithPasswordButton({ email, password, confirmPassword, isTermsAccepted }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        console.log(isTermsAccepted)

        if (!isTermsAccepted) {
            toast.error("You need to accept Terms and Conditions.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                
                sendEmailVerification(user)
                    .then(() => {
                        alert("Verification mail sent.");
                    })
                    .catch(error => {
                        console.error("Couldn't send verification mail: ", error);
                    });

                navigate("/signin");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                toast.error(getErrorMessage(errorCode, errorMessage));
            });
    };

    return (
        <button
            type="button"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleClick}
        >
            Create an account
        </button>
    );
}