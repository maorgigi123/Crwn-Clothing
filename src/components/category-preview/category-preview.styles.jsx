import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  font-size: 28px; 
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;


  /* On screens that are 992px or less, set the background color to blue */
  @media screen and (max-width: 992px) {
    overflow:hidden;
    & ${Preview} {
      width:132%;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 600px) {
    overflow-x:hidden;
    & ${Preview} {
      width:200%;
      grid-template-columns: repeat(4, 1fr);
    }
  }


`;

