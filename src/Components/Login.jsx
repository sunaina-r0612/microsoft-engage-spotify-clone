import React from 'react';
import styled from 'styled-components';

export default function Login() {
  
  const handleClick = () => {
    const client_id = "d670d5b2373b4da7b5e409fc0f333cac";  //unique for everyone
    const redirect_uri = "http://localhost:3000/";   //after authentication, redirect to this url
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",  //user scope
      "user-read-private",  //user scope
      "user-modify-playback-state", //spotify connect scope
      "user-read-playback-state", //spotify connect scope
      "user-read-currently-playing",  //spotify connect scope
      "user-read-recently-played", //listening history scope
      "user-top-read",  //listening history scope
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
  <Container>
    <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify'/>
    <button onClick={handleClick}>Connect Spotify</button>
  </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    
    img{
        height:20vh;
    }
    
    button{
      padding: 1rem 5rem;
      border-radius: 5rem;
      background-color: black;
      color: #49f585;
      border: none;
      font-size: 1.4rem;
      cursor: pointer;
    }
`;

