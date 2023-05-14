import styled from "styled-components";
import TextBar from "../components/TextBar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <Container>
      <TextBar
        text="EXCLUSIVE !!!  buy 10 receive 1 tux for FREE"
        size="25px"
      />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.pngmart.com/files/22/Crewneck-Or-Classic-T-Shirt-PNG-Isolated-HD.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Title</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            expedita quasi blanditiis repudiandae nulla sed culpa molestias quis
            vero, nobis totam natus, quas tempore illo eaque, doloribus magnam
            vel soluta.
          </Description>
          <Price>22 $</Price>
          <AddContainer>
            <AmmountContainer>
              <Remove />
              <Ammount>1</Ammount>
              <Add />
            </AmmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #010101;
`;

const Image = styled.img`
  object-fit: cover;
  width: 60%;
  height: 80vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 22px;
`;
const Title = styled.h2`
  font-weight: 200;
`;
const Description = styled.p``;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const AddContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;
const Button = styled.button`
  margin-left: 30px;
  --b: 2px; /* border thickness */
  --s: 0.8em; /* size of the corner */
  --color: #fca311;
  --color2: white;

  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color2);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #000000 90deg,
      var(--color2) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;
  font-weight: bold;
  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }
`;

const Ammount = styled.div`
  display: flex;
  border-radius: 14px;
  border: 2px solid teal;
  align-items: center;
  padding: 15px;
  margin: 2px 5px;
`;
