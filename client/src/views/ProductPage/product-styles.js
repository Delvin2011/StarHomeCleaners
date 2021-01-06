import styled from 'styled-components';

   export const QuantityGridSplit = styled.div`
   display: grid;
   grid-template-columns: 35% 20%;
   grid-gap: 2px;
   justify-items: left;
 `;

 export const ButtonGridSplit = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    justify-items: left;
`;