import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
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
  background-color: #ffffff;
  
`;

const Left = styled.div`
  flex : 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size:14PX;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border :0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`


const Center = styled.div`
  flex : 1;
`;
const Right = styled.div`
  flex : 1;
`;
