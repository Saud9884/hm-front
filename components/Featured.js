import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export default function Featured() {
  return (
    <div>
      
      <Link href="/products">

          <StyledImage src="/banner2.jpg" alt="banner" width={1270} height={321}  layout="responsive"/>
          
          </Link>
        
      
    </div>
  );
}
