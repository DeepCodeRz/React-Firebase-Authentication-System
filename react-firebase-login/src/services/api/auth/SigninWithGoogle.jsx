import React from 'react';
import { useNavigate } from 'react-router';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import googleLogo from '../../../assets/googleLogo.png';
import { Toaster, toast } from 'sonner'
import { getErrorMessage } from '../../../utils/firebaseErrors';

const provider = new GoogleAuthProvider();

function GoogleSignInButton() {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            console.log('User Info:', user);
            console.log('Access Token:', token);

            navigate('/application');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.error('Error:', errorCode, errorMessage, email);
            toast.error(getErrorMessage(errorCode, errorMessage));
        }
    };

    return (
        <button
            className="flex gap-4 items-center px-4 py-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all ease"
            onClick={handleGoogleSignIn}
        >
            <img src={googleLogo} alt="Google Logo" className="size-5" />
            <span className="text-sm font-medium">Sign in with Google</span>
        </button>
    );
};

export default GoogleSignInButton;