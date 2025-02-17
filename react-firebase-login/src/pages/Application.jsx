import {getSignedInUser} from "../services/api/auth/getSignedInUser.js";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {auth} from "../services/api/firebaseConfig.js";
import {useAppContext} from "../services/state/AppContextProvider.jsx";

export default function Application() {
    const navigate = useNavigate();
    const {setUser} = useAppContext()

    useEffect(() => {
        getSignedInUser(auth, (user) => {
            if (!user.signedIn) {
                navigate("/signin");
            } else {
                setUser(user)
            }
        });}, [navigate]);

    return (
        <div className="w-screen h-screen flex">
            <div className="w-full flex flex-col">
                <h1>Application Page</h1>
            </div>
        </div>
    )
}