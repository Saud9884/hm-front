import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Button from "./Button";
import { CldImage } from "next-cloudinary";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;

const Title = styled(Link)`
  font-weight: 600;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;

`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <CldImage
            width="960"
            height="800"
            src={images?.[0]}
            sizes="100vw"
            alt="Product Image"
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title.toUpperCase()}</Title>

        <PriceRow>
          <Price>${price}</Price>
        </PriceRow>
        <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
