import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              crimewave{" "}
            </Link>{" "}
          </Logo>
          <Language>EN</Language>
        </Left>
        <Center>
          <SearchContainer>
            <Search style={{ color: "black", fontSize: 25 }} />
            <Input />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log-in
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register" style={{ textDecoration: "none" }}>
              register
            </Link>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Link to="/cart">
                <Badge badgeContent={quantity}>
                  <ShoppingCartOutlinedIcon color="warning" />
                </Badge>
              </Link>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 60px;
  background-color: #000000;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 7px;
  margin-right: 7px;
  color: #000000;
  font-size: 18px;
  background-color: #ffffff;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin-right: 25px;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
`;
