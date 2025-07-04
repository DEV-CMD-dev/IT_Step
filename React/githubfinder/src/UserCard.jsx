import React from 'react';

export default function UserCard({ login, url, photo, followers,  public_repos }) {
    return (
        <div className="user-card">
            <img src={photo} alt="User Avatar" className="user-avatar" />
            <h2 className="user-name">Username: {login}</h2>
            <p className="user-url">Profile: <a href={url} target="_blank">{url}</a></p>
            
            <div className="user-stats">
                <p><strong>Followers:</strong> {followers}</p>
                <p><strong>Public Repos:</strong> {public_repos}</p>
            </div>
        </div>
    );
}
