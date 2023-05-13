import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { FavoriteBorder } from "@material-ui/icons";
import styled from "styled-components";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorder />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(216, 180, 52, 0.516);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #060606;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 260px;
  height: 320px;
  background-color: #ffffff;
  position: absolute;
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FCA311;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ff1616;
    transform: scale(1.1);
  }
`;


