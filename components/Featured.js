import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
    
  }
  div{
    align-item
  }
`;
export default function Featured() {
  return (
    <div>
      <Bg>
        <Center>
          <Wrapper>
            <div>
              <Title>Featured 1</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae soluta non ducimus iste quod laborum minus facere autem, quibusdam assumenda, distinctio voluptatem itaque sit maxime eveniet possimus repellat praesentium?
              </Desc>
            </div>
            <div>
              <img
                src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                alt=""
              />
            </div>
          </Wrapper>
        </Center>
      </Bg>
    </div>
  );
}
