import React from 'react';

import {
  Container, 
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

 interface ImagesSliderProps {
   imagesUrl: string[];
 }

export function ImageSlider({ imagesUrl }: ImagesSliderProps){
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} isLast />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode='contain' />
      </CarImageWrapper>
    </Container>
  );
}
