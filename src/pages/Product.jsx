import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import { Newsletter } from "../components/Newsletter"
import { Footer } from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`
`
const Wrapper = styled.div`
display:flex;
padding: 50px;
`


const ImgContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    background-color:purple;
`

const Image = styled.img`
    object-fit:cover;
    width:50%;
    height:80vh;

`
const InfoContainer = styled.div`
flex:1;
padding:22px;

`
const Title = styled.h2`
font-weight: 200;
`
const Description = styled.p``
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const AddContainer= styled.div`
    display:flex;
    margin-top:20px;
    justify-content:space-between;
`
const AmmountContainer= styled.div`
 display:flex;
 align-items:center;
 font-weight:300;

`
const Button = styled.button`
    padding:15px;
    border 3px solid #fca311;
    background-color: white;
    font-size:20px;
    font-weight:300;
    transition:all 0.8s ease;
    
    &:hover{
        background-color: #fca311;
        color:white;        
    }
`
const Ammount= styled.div`
display:flex;
border-radius:14px;
border:2px solid teal;
align-items:center;
padding:15px;
margin: 2px 5px;
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.pngmart.com/files/13/Thrasher-T-Shirt-PNG-Clipart.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Title</Title>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque expedita quasi blanditiis repudiandae nulla sed culpa molestias quis vero, nobis totam natus, quas tempore illo eaque, doloribus magnam vel soluta.
                </Description>
                <Price>22 $</Price>
                <AddContainer>
                    <AmmountContainer>
                        <Remove/>
                        <Ammount>1</Ammount>
                        <Add/>

                    </AmmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product