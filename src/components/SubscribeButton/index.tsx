import React from "react";
import styled from "styled-components";

interface Props {}

function SubscribeButton(props: Props) {
  const {} = props;

  return <StyledContainer type="button">Subscribe now</StyledContainer>;
}

export default SubscribeButton;

const StyledContainer = styled.button`
  height: 4rem;
  width: 260px;
  border: 0;
  border-radius: 2rem;
  background: var(--yellow-500);
  color: var(--gray-900);
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
