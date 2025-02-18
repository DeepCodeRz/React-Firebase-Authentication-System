import React from 'react';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function SignOutButton({label}) {
    const navigate = useNavigate()

    function handleSignOut() {
        signOut(auth)
            .then(() => {
                console.log("Logged out.");
                navigate('/')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <button
            className="flex gap-4 items-center px-4 py-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all ease"
            onClick={handleSignOut}
        >{label}</button>
    )
}