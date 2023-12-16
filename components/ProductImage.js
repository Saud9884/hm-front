import styled from "styled-components";
import {useState} from "react";
import { CldImage } from "next-cloudinary";

const Image = styled.div`
img{
    max-width: 100%;
    max-height: 100%;
}

  `;
const BigImage = styled.div`
img {
    max-width: 100%;
    max-height: 200px;
}

`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage>
        <CldImage 
            width="200"
            height="150"
            src={activeImage}
            alt="Product Image"
          />
        </BigImage>
      </BigImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
           <Image>
          <CldImage
            width="60"
            height="40"
            src={image}
            alt="Product Image"
          />
        </Image>
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}