import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Container, Header, TotalCars, HeaderContent } from "./styles";

export function Home() {
  const carData = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      thumbnail:
        "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
    },
    {
      brand: "Porsche",
      name: "Panamera",
      rent: {
        period: "Ao dia",
        price: 340,
      },
      thumbnail:
        "https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-panamera-corretora-de-seguros-700x350.png",
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData[0]} />
      <Car data={carData[1]} />
    </Container>
  );
}
