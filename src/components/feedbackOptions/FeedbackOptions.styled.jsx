import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding-inline-start: 0px;
`;
export const ButtonItem = styled.li`
  list-style: none;
  padding:0,
  margin:0
`;
export const Button = styled.button`
  text-transform: capitalize;
  padding: 10px;
  border: 1px solid thistle;
  border-radius: 7px;
  background-color: skyblue;
  //   font-family: monospace;
  &:hover {
    background-color: yellow;
  }
`;
