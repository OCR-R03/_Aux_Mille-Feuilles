import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from '../../Data/Data';



const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    width: 50px;
    height: 50px;
    background-color: #31b572;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    margin-top: 50px;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 250px;
  margin-top: 27px;
  border-radius: 20px;
  border: 2px solid gray;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
  margin: 0px -50px;
`;

const Desc = styled.p`
  margin: 50px -50px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #31b572;
`;

const Button = styled.button`
  margin: 0px -50px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-color: #31b572;
  color: white;
  cursor: pointer;
  transition: transform .2s;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button className="btn_hover_slider">VOIR MAINTENANT</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider