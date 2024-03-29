import styled from 'styled-components';

export const BackgroundImage = styled.div.withConfig({
  shouldForwardProp: (prop) => 'imageUrl' !== prop,
})`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 25%;
  height: 500px;
  flex: 1 auto 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;


  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    & ${Body} {
      opacity: 0.9;
    }
  }
  &:nth-child(2) {
    flex-grow: 1;
  }

  &:nth-child(4) {
    flex-grow: 1;
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
    flex-grow: 1;
  }
`;