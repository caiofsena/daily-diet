import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type WithinDietProps = {
  selected?: boolean;
};

type WithinDietSymbolProps = {
  value: 'yes' | 'no';
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK
}))``;

export const HeaderTitle = styled.View`
  flex: 1;
  margin-left: -15px;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderTitleValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const General = styled.View`
  flex: 1;
  margin-top: 16px;
  margin-bottom: -36px;
  padding: 0px 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Label = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Input = styled.TextInput`
  margin-top: 4px;
  height: 48px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const InputLarge = styled.TextInput`
  margin-top: 4px;
  height: 120px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const DateHour = styled.View`
  flex-direction: row;
`;

export const Date = styled.View`
  flex: 1;
`;

export const Hour = styled.View`
  flex: 1;
  margin-left: 32px;
`;

export const WithinDiet = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const WithinDietStatus = styled.View<WithinDietSymbolProps>`
  margin: 8px;  
  align-self: center;
  width: 8px;
  height: 8px;
  border-radius: 20px;
  background-color: ${({ theme, value }) => value === 'yes' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const WithinDietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Yes = styled.TouchableOpacity<WithinDietProps>`
  flex: 1;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme, selected }) => selected ? theme.COLORS.GREEN_MID : theme.COLORS.GRAY_6};
  ${({ theme, selected }) => css`
    border-width: ${selected ? 1 : 0}px;
    border-color: ${selected ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6};
    background-color: ${selected ? theme.COLORS.GREEN_MID : theme.COLORS.GRAY_6};
  `};
`;

export const No = styled.TouchableOpacity<WithinDietProps>`
  flex: 1;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 16px;
  ${({ theme, selected }) => css`
    border-width: ${selected ? 1 : 0}px;
    border-color: ${selected ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6};
    background-color: ${selected ? theme.COLORS.RED_MID : theme.COLORS.GRAY_6};
  `};
`;

export const Register = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonRegister = styled.TouchableOpacity`
  margin-bottom: 32px;
  padding: 16px 0px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ButtonRegisterText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;
