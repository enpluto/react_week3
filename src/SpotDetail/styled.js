import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  max-width: 600px;
  width: 100%;

  line-height: 1.25;

  h2 {
    font-weight: 500;
    font-size: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: grey;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    font-weight: bold;
    margin-right: 5px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  input {
    font-size: 14px;
    border: none;
    padding: 10px 20px;
    width: auto;

    cursor: pointer;
    background-color: white;
  }

  input:hover {
    /* background-color: grey; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  background-color: #efefef;
  border-radius: 10px;
`;
