import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () => {
    navigate('/signup');
  }
  const handleSignIn = () => {
    navigate('/signin');
  }

  return (
    <Container>
      <Title>TODOLIST</Title>
      {
        isSignIn ? (
          <div>PROFILE</div>
        ) : (
          <HeaderItem>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </HeaderItem>
        )
      }
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: magenta;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const HeaderItem = styled.div`
  display: flex;
  gap: 0.4rem;
`;