import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface DateValueProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  justify-content: center;

  padding: ${getStatusBarHeight() + 32}px 24px 32px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

export const DateInfo = styled.View`
  flex: 1;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-color: ${theme.colors.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
