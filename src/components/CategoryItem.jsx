import React from "react";
import styled from "styled-components";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
`;


const Button = styled.button`
  --b: 3px; /* border thickness */
  --s: 0.45em; /* size of the corner */
  --color: #FCA311;
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
