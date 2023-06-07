import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {  MailOutline, Payment, Phone, Room } from "@mui/icons-material";

const Container=styled.div`
    display:flex;
`

const Center=styled.div`
flex:1;
padding:20px;

`
const Title = styled.h3`
    margin-bottom:20px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    
`
const ListItem = styled.li`
    

`


const Rightside=styled.div`
flex:1;
padding:20px;

`
const ContactItem=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;


`



const Leftside=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Description = styled.p`
    padding:10px;
`
const SocialContainer = styled.h1`
    display:flex;

`
const SocialIcon = styled.div`
    border-radius:50%;
    background-color:#${(props)=>props.color};
    color:white;
    margin-right:10px;
    padding:10px;
    display:flex;
`

export const Footer = () => {
  return (
    <Container>
        <Leftside>
            <Logo>
                crimewave
            </Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque eveniet commodi voluptatibus quaerat libero ea illo voluptatem et harum quod, repudiandae molestias at officiis, sit quos architecto vel! Quis.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
            </SocialContainer>
        </Leftside>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Rightside>
            <Title>Contacts</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 666 Boulevard Allal Lfassi , Rabat
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +212667788990
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> nicemail@irfane.com
            </ContactItem>
            <ContactItem>
                <Payment src=""/>
            </ContactItem>
        </Rightside>
    </Container>

  )
}
