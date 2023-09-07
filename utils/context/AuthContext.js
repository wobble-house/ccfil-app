'use client'
import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from 'utils/Google/firebase/config';
import Loading from '../../app/loading';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);


export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = React.useState("");
    const [loading, setLoading] = React.useState(user);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <Loading/> : children}
        </AuthContext.Provider>
    );
};