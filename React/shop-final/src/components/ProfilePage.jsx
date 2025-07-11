import React from 'react';
import './ProfilePage.css';

export default function ProfilePage() {
    return (
        <div className="profilePage">
            <h1>Profile</h1>
            <img src="https://avatars.githubusercontent.com/u/197484190?v=4&s=460" alt="Profile" className="profileImage" />
            <p>Admin</p>
        </div>
    );
}
