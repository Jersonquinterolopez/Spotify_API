import React from 'react'
import { generateCodeVerifier, generateCodeChallenge } from '../../services/codeChallenge'

function Login() {

    const verifier = generateCodeVerifier
    const challenge = generateCodeChallenge(verifier)

     loginRedirect = () => {
        const baseURL = 'https://accounts.spotify.com/authorize'
        const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        const redirect_uri = 'http://localhost:3000/success'
        const code_challenge = challenge
        window.open(`${baseURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&code_challenge=${code_challenge}&code_challenge_method=S256)`)
    };

    return (
        <button onClick={loginRedirect}>Login</button>
    ) 
}

export default Login