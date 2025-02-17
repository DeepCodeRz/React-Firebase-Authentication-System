import { auth } from '../firebaseConfig.js';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router';
import { Toaster, toast } from 'sonner'
import { getErrorMessage } from '../../../utils/firebaseErrors';

export default function SigninWithPasswordButton({ email, password, rememberMe }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;

        setPersistence(auth, persistenceType)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, password);
            })
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/application");
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
            Sign in
        </button>
    );
}