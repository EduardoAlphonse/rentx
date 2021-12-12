import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface ImageIndexProps {
  active: boolean;
  isLast?: boolean;
}

export const Container = styled.View`
  
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px;
    border-radius: 3px;
    
    margin-right: ${({ isLast }) => isLast ? 0 : 8}px;

    background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('screen').width}px;
  padding: 0 48px;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
