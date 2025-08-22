import { useState } from 'react';
import './ProfilePage.css';
import { User } from './classes/User';
import bcrypt from "bcryptjs";
import { UserRole } from './classes/UserRole';

const Admin = new User("Admin", bcrypt.hashSync("Admin"), UserRole.Admin)

export default function ProfilePage({ currentUser, setCurrentUser }) {
    const [users, setUsers] = useState<User[]>([Admin]);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        const hash = bcrypt.hashSync(password, 5);
        setUsers([...users, new User(username, hash, UserRole.User)]);
        setUsername('');
        setPassword('');
        alert(`User "${username}" registered!`);
    }

    const login = () => {
        const user = users.find(u => u.username === username);
        if (!user) {
            alert(`User "${username}" not found`);
            return;
        }
        const isValid = bcrypt.compareSync(password, user.passwordHash);
        if (isValid) {
            setCurrentUser(user);
            setUsername('');
            setPassword('');
        } else {
            alert("Wrong password");
        }
    }

    const logout = () => {
        setCurrentUser(null);
    }

    return (
        <div className="profilePage">
            {!currentUser ? (
                <div className="form">
                    <h2>Register / Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="buttons">
                        <button onClick={register}>Register</button>
                        <button onClick={login}>Login</button>
                    </div>
                </div>
            ) : (
                <div className="profile">
                    <h2>Welcome, {currentUser.username}!</h2>
                    <p>Role: {currentUser.role}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
}
