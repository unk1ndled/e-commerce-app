import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e9e7e7;
  border-radius: 50%;
  align-items: center;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Arrow>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};
export default Slider;
