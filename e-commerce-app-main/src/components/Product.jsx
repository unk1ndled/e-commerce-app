import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { FavoriteBorder } from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Product = ({ item }) => {

  const navigate = useNavigate();

  function handleClick() {
    navigate({ pathname: '/product' });
  }

  return (
      <Container onClick={handleClick}>
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
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  --b: 5px; /* border thickness */
  --s: 0.8em; /* size of the corner */
  --color: #fca311;
  --color2: #000000;

  color: var(--color2);
  --_p: var(--s);

  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #76664043 90deg,
      var(--color2) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));

  transition: 0.2s linear, color 0s, background-color 0.09s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
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
    background: #2316008a;
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  border-color: black;
  border: 3px solid;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
  border: #000000;
`;




const Icon = styled.div`
  z-index: 4;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fca311;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: #ff1616;
  }
`;
