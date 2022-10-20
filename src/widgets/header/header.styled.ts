import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  background: #141d33;
  border-radius: 0 0 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 335px) {
    flex-direction: column;
    height: 150px;
  }
`