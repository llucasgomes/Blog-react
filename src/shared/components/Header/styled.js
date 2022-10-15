import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(-45deg, #574ae8, #3ea1db);
  color: #ffffff;

  .menu {
    display: flex;
    width: 75%;
    height: 30%;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    p {
      font-family: var(--LexaDeca);

      font-weight: bold;
      font-size: 20px;
    }
  }
  .menu.buscar {
    justify-content: space-evenly;
    .lupa {
      position: absolute;
      left: 15%;

      font-size: 28px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  padding-left: 50px;
  border-radius: 5px;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  font-family: var(--LexaDeca);
  font-weight: 500;
  font-size: 18px;
`;
