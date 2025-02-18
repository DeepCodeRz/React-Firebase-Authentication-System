import {getSignedInUser} from "../services/api/auth/getSignedInUser.js";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {auth} from "../services/api/firebaseConfig.js";
import {useAppContext} from "../services/state/AppContextProvider.jsx";
import SignOutButton from "../services/api/auth/SignOutButton.jsx";

export default function Application() {
    const navigate = useNavigate();
    const {user, setUser} = useAppContext()

    useEffect(() => {
        getSignedInUser(auth, (user) => {
            if (!user.signedIn) {
                navigate("/signin");
            } else {
                setUser(user)
            }
        });
    }, [navigate]);

    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl mb-4 font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Application Page</h1>
            <p className="text-xl font-medium">User logged in with UID: {user ? user.uid : "..."}</p>
            <SignOutButton label={"Log out and go to home page"} />
        </div>
    )
}