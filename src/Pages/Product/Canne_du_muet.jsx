import React from 'react';
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  border-radius: 20px;
  border: 2px solid #31b572;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
  margin-top: 2em;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #31b572;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        
    
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/WHyPdnT/Photo-7.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Canne du muet "Dieffenbachia Seguine" : </Title>
          <Desc>
              <div className='Desc_Canne_du_muet'>
                Dieffenbachia seguine est une esp??ce de plantes de la famille des Araceae.
                Cette esp??ce originaire d'Am??rique du Sud est utilis??e principalement pour son feuillage attractif,
                comme plante d'ornement dans les jardins des r??gions tropicales et comme plante d'appartement dans les r??gions plus froides.
              </div>
          </Desc>
          <Title style={{marginTop: 50}}>Entretien :</Title>
          <Desc>
              <div className='Desc_entretien_Canne_du_muet'>
                Un bon entretien commence par un bon emplacement. Votre canne du muet sera donc install??e ?? la lumi??re, 
                sans soleil direct. Mieux encore, n'h??sitez pas ?? la tourner r??guli??rement afin de faire profiter son feuillage entier de la luminosit?? b??n??fique. 
                L'arrosage doit donc ??tre soutenu entre le printemps et l'automne
              </div>
          </Desc>
          <Price>Prix : 20 ???</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Type de plante : int??rieur et tropical</FilterTitle>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Ajoutez au panier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;