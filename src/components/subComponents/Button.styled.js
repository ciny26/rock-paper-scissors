import styled from "styled-components";

const Button = styled.button`
  background-color: #2196F3; /* Material blue */
  border: none;
  color: white;
  min-width : 80px;
  height: fit-content;
  padding : 10px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px; /* Slightly reduced font size */
  cursor: pointer;
  border-radius: 10px; /* Slightly rounded corners */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976D2; /* Darker blue on hover */
  }
`;

export default Button;
