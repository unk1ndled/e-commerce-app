import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #717171;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e9e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  top:0px;
  bottom:0px;
  left: ${(props) => (props.direction === "left-side" ? "10px" : "none")};
  right: ${(props) => props.direction === "right-side" ? "10px" : "none"};

  margin:auto;
`;

const SliderUpdated = () => {
  return (
    <Container>
      <Arrow direction="left-side">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Arrow direction="right-side">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};
export default SliderUpdated;
