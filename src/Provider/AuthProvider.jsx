import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword( auth, email, password );
    }



    const logOut = () => {
        return signOut( auth );
    }

    useEffect( ()=>{
        //mount
        const unsubscribe =  onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
        })
        //unmount
        return ()=>unsubscribe()
    },[])

    const authInfo = {
        createUser,
        user,
        setUser,
        logOut,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;