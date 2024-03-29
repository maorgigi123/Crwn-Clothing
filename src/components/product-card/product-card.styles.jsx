import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 95%;
    object-fit: fill;
    margin-bottom: 5px;
    transition: 0.4s;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      transform: scale(1.11);
      transition: transform .4s cubic-bezier(0.25, 0.45, 0.45, 0.95); 
    }
    & ${Footer} {
      position: absolute;
      color:white;
      bottom:0;
      font-weight: bold;
      text-shadow: 0 0 2px #000000, 0 0 2px #000000; 
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;