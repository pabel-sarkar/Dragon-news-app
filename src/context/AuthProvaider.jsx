import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvaider = ({ children }) => {
    const name = {name:'name'}
    const userInfo = {
        name,
    };

    return (
        <AuthContext value={userInfo}>
        {children}
        </AuthContext>
    );
};

export default AuthProvaider;
