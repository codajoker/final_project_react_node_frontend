import styled from 'styled-components';

export const LoaderBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: ${props => props.full ? "100vh" : "100%"};
   position: relative;
   background: ${props => props.full ? props => props.theme.body : null};
`