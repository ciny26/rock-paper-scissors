import styled from "styled-components";

const PlayingBtn = styled.button`
  display : flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.$borderc} solid 4px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  &:hover{
    cursor:pointer;
  }
`;
 
export default PlayingBtn ;