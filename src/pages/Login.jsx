import styled from "styled-components"
// import bgImage from "./images/bgRegister.jpg"

const Component = styled.div`
    height:100vh;
    width:100wh;
    display:flex;
    background:url("https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg") center;
    justify-content:center;
    align-items:center;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    

`
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:30px;
    width:40%;
    flex-wrap:wrap;
    background-color:white;
    border: 10px solid #fca311 ;
`
const Title = styled.h2``
const Input = styled.input`
    flex:1;
    min-width:80%;
    max-width:44%;
    margin: 5px 5px;
    padding:10px;
`
const Button = styled.button`
flex:1;
min-width:90%;
font-size:20px;
font-weight: 200;
max-width:44%;
margin: 5px 5px;
padding:10px;
border 3px solid #fca311;
background-color: white;
transition:all 0.8s ease;
    
    &:hover{
        background-color: #fca311;
        color:white;        
    }
`


function Login() {
  return (
    <Component>
        <Wrapper>
            <Title>Welcome again...</Title>
            <Form>
                <Input placeholder="Email"></Input>
                <Input placeholder="Password"></Input>
                <Button>Sign In</Button>
            </Form>
        </Wrapper>
    </Component>
  )
}

export default Login