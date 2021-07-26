import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ComponentDiv = styled.div`
    display: flex;
    background-color: #DC143C;
    min-height: 100vh;
    padding-top: 70px;
`

const LoginDiv = styled.div`
    color: #DC143C;
    background-color: #FFFAF0;
    text-align: center;
    position: absolute;
    top: 25%;
    left: 43%;
    padding: 150px 100px;
    border-radius: 10px;
`

const LoginForm = styled.form`
    display: grid;
`

export default function Login({ setToken, redirect }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let history = useHistory();

    async function loginUser(credentials) {
        return fetch('https://localhost:44313/api/AuthManagement/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });

        if (token) {
            setToken(token);
            history.push('/Home');
        }
    }

    return (
        <ComponentDiv>
            <LoginDiv>
                <h1 style={{ marginBottom: '50px' }}>Log In</h1>
                <LoginForm onSubmit={handleSubmit}>
                    <div className="ui input" style={{ marginBottom: '10px' }}>
                        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="ui input" style={{ marginBottom: '10px' }}>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#DC143C', color: '#FFFAF0' }} className="ui button">Login</button>
                    </div>
                </LoginForm>
            </LoginDiv>
        </ComponentDiv>
    )
}