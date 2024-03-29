import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to="/ProductsList">
              <Button>Get Now!</Button>
              </Link>
            </TextContainer>
            <Empty></Empty>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left-side" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon style={{ color: "white" }} />
      </Arrow>
      <Arrow direction="right-side" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon style={{ color: "white" }} />
      </Arrow>
    </Container>
  );
};
export default Slider;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-color: black;
  border: 3px solid;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;

  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  border-radius: 0px;
  opacity: 0.7;
  height: 50px;
  background-color: #3f3f3f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${(props) => (props.direction === "left-side" ? "10px" : "none")};
  right: ${(props) => (props.direction === "right-side" ? "10px" : "none")};

  margin: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  justify-content: space-between;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const Empty = styled.div`
  flex: 1;
  width: 30px;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: 2px;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 25px;
`;
const Image = styled.img`
  height: 100%;
  align-items: center;
`;
