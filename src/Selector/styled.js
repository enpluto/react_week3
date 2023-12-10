import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  max-width: 1024px;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .loading-text {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  font-size: 16px;
  font-weight: bold;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 320px;
    height: 160px;
    object-fit: cover;
  }
`;
