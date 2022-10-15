import styled from "styled-components";

export const Container = styled.div`
  max-width: 65%;
  min-height: 20%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: var(--LexaDeca);
  font-weight: 400;
  margin-bottom: 20px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .date-favorite {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    .date {
      color: #717171;
    }

    .favorite,
    .favorite-cheked {
      color: red;
      cursor: pointer;
    }
  }
  .title {
    margin-bottom: 15px;
    cursor: pointer;

    width: fit-content;
  }
  .subject {
    color: #717171;
    font-size: 15px;
  }
`;
