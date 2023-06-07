import { Send } from '@mui/icons-material'
import styled from "styled-components";
const Container=styled.div`
    height:60vh;
    background-color: #FCA311;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const Title=styled.h1`
    font-size:60px;
`;
const Description=styled.div`
    font-weight:200;
    font-size: 22px;
    margin-bottom:22px;
`;
const InputContainer=styled.div`
    height:44px;
    width:50%;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid gray;
`
const Input=styled.input`
    border:none;
    flex:7;
    padding-left:22px;    
`
const Button=styled.button`
    flex:1;
    background-color:teal;
    color:white;
`

export const Newsletter = () => {
  return (
    
        <Container>
            <Title>
                Contact us
            </Title>
            <Description>
                Stay in touch with us for the latest news
            </Description>
            <InputContainer>
                <Input placeholder="email..."/>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    
  )
}
