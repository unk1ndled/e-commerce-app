import styled from "styled-components";

// import bgImage from "./images/bgRegister.jpg"

const Component = styled.div`
  height: 100vh;
  width: 100w;
  display: flex;
  background: url("https://img.freepik.com/vrije-photo/bauhaus-geinspireerd-patroon-achtergrond-afbeelding_53876-104126.jpg?w=1060&t=st=1684098049~exp=1684098649~hmac=bf1b1821671be63a19f15106dae493224a53e3cfd6a582d22209799cabc85209")
    center;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  margin-top:30px;
  display: flex;
  flex-wrap: wrap;

`;
const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  width: 40%;
  flex-wrap: wrap;
  background-color: white;
`;
const Title = styled.h2``;
const Input = styled.input`
  flex: 1;
  min-width: 44%;
  max-width: 44%;
  margin: 5px 5px;
  padding: 10px;
`;
const Button = styled.button`
  flex: 1;
  min-width: 44%;
  max-width: 44%;
  margin: 5px 5px;
  padding: 10px;
  border: 3px solid #fca311;
  background-color: white;

  transition: all 0.2s ease;

  &:hover {
    background-color: #fca311;
    color: white;
  }
`;



const Register = () => {
  return (
    <Component>
      
      <Wrapper>
        <Title>Register here </Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm password"></Input>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Component>
  );
};

export default Register;
