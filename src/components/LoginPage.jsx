import React, { useState } from 'react';
import Button from './Button'; // Import the reusable button

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '' || password === '') {
            alert("Please enter both username and password.");
        } else {
            alert(`Logging in as ${username}...`);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login Page</h2>
            
            <div style={{ marginBottom: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>

            {}
            <Button label="Login" action={handleLogin} />
            
        </div>
    );
}

export default LoginPage;