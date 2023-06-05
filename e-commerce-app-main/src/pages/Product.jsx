import styled from "styled-components";
import TextBar from "../components/TextBar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";

import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    console.log(size);
    dispatch(addProduct({ ...product, quantity, size }));

  };

  return (
    <Container>
      <TextBar
        text="EXCLUSIVE !!!  buy 10 receive 1 tux for FREE"
        size="25px"
      />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>

          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
            </FilterSize>
          </Filter>
          <Price>Price : {product.price} DH</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
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
  font-weight: 500;
  font-size: 50px;
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
const AmountContainer = styled.div`
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

const Amount = styled.div`
  display: flex;
  border: 5px solid;
  border-color: #fca311;
  align-items: center;
  padding: 15px;
  margin: 2px 5px;
  font-size: 30px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
