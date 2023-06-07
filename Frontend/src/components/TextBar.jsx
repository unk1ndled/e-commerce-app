import styled from "styled-components";

const TextBar = (props) => {
  return <Container size={props.size}>  {props.text} </Container>;
};

export default TextBar;

const Container = styled.div`
  height: ${(props) => {return props.size}};
  background-color: #FCA311;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bolder;
`;
