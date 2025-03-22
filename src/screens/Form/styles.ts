import RNDateTimePicker from '@react-native-community/datetimepicker';
import { ArrowLeft } from 'phosphor-react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';

type WithinDietProps = {
  selected?: boolean;
};

type WithinDietSymbolProps = {
  value: 'yes' | 'no';
}

type WithinEditable = {
  isEditable?: boolean;
};

export const Container = styled(SafeAreaView)<WithinEditable>`
  flex: 1;
  background-color: ${({ theme, isEditable }) => isEditable ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_5};
`;

export const Prevent = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1
  }
})``;

export const Header = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_2
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
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Label = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Error = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_MID};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
`;

export const Input = styled.TextInput`
  margin-top: 4px;
  height: 48px;
  padding: 8px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const InputMasked = styled(MaskedTextInput)`
  margin-top: 4px;
  height: 48px;
  padding: 8px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const FormTime = styled(RNDateTimePicker)`
  margin-top: 4px;
  height: 48px;
  padding: 8px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const InputLarge = styled.TextInput`
  margin-top: 4px;
  padding: 5px;
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

export const RegisterButtons = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const Register = styled.View`
  margin-bottom: 10px;
`;

export const ButtonRegister = styled.TouchableOpacity<WithinEditable>`
  flex-direction: row;
  justify-content: center;
  padding: 16px 0px;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ isEditable=false, theme }) => isEditable ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  background-color: ${({ isEditable=false, theme }) => isEditable ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`;

export const ButtonRegisterIcon = styled(Icon)<WithinEditable>`
  margin-right: 12px;
  ${({ isEditable=false, theme }) => css`
    color: ${isEditable ? theme.COLORS.WHITE : theme.COLORS.BLACK};
  `};
`;

export const ButtonRegisterText = styled.Text<WithinEditable>`
  ${({ isEditable=false, theme }) => css`
    color: ${isEditable ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

