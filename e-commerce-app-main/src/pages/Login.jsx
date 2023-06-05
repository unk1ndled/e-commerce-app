import { useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/apiCalls"
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
border :3px solid #fca311;
background-color: white;
    &disabled{
        color:green;
        cursor:not-allowed
    }
transition:all 0.8s ease;
    
    &:hover{
        background-color: #fca311;
        color:white;        
    }
`
const Error = styled.span`
    color:red;
`

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user);
    // console.log("isFetching",isFetching);
    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch,{username,password});
    }
  return (
    <Component>
        <Wrapper>
            <Title>Welcome again...</Title>
            <Form>
                <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></Input>
                <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></Input>
                <Button onClick={handleClick} disabled={isFetching}>Log-in</Button>
                {error && <Error>Something is wrong..</Error>}
            </Form>
        </Wrapper>
    </Component>
  )
}

export default Login