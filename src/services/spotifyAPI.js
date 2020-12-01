import axios from 'axios';

export const authentication = axios.create({
  baseURL: 'https://accounts.spotify.com/authorize',
});

// params: {
//   client_id: '',
//   response_type: code,
//   redirect_uri: 'http://localhost:3000/success',
//   code_challenge_method: S256,
//   code_challenge: challenge,
// },
