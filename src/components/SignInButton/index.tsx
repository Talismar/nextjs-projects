import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

interface Props {}

function SignInButton(props: Props) {
  const isUserLoggedIn = false;

  return (
    <StyledContainer>
      <FaGithub color="#eba417" />

      {isUserLoggedIn ? (
        <>
          Talismar Fernandes
          <FiX color="#737380" />
        </>
      ) : (
        "Sign in with Github"
      )}
    </StyledContainer>
  );
}

export default SignInButton;

const StyledContainer = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background-color: var(--gray-850);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-weight: 700;
  transition: filter 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  svg:last-child {
    margin-left: 1rem;
  }
`;
