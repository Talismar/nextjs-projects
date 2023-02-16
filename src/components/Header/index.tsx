import Link from "next/link";
import styled from "styled-components";
import SignInButton from "../SignInButton";

export default function Header() {
  return (
    <StyledContainer>
      <StyledContent>
        <img src="/images/logo.svg" alt="is.news" />
        <nav>
          <Link className="active" href={""}>
            Home
          </Link>
          <Link href={""}>Posts</Link>
        </nav>

        <SignInButton />
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
`;

const StyledContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 100%;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 100%;
      line-height: 5rem;
      color: var(--gray-300);
      transition: color 0.2s;

      // Aplicar style for secondary item em diante
      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: var(--white);
      }

      &.active {
        font-weight: bold;
        color: var(--white);
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--yellow-500);
      }
    }
  }

  // quando colocamos margin e uma direção vai tentar empurar o máximo que ele puder
  button {
    margin-left: auto;
  }
`;
