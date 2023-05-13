import styled from "styled-components";

const Announcement = () => {
  return <Container>  EXCLUSIVE !!!  buy 10 receive 1 tux for FREE </Container>;
};

export default Announcement;

const Container = styled.div`
  height: 25px;
  background-color: #ff1616;
  color: #f5dada;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bolder;
`;
