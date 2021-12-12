import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  Separator,
} from "./styles";

export function Home() {
  const carData = {
    id: 0,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
  };

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

      <CarList
        data={new Array(10)}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => <Car data={carData} />}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
}
