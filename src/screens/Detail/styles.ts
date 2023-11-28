import { ArrowLeft, PencilLine, Trash } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type WithinDietProps = {
  inDiet: boolean;
}

type LabelProps = {
  isModal?: boolean;
}

export const Container = styled(SafeAreaView)<WithinDietProps>`
  flex: 1;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Label = styled.Text<LabelProps>`
  ${({ theme, isModal }) => css`
    padding-left: ${isModal ? 64 : 0}px;
    padding-right: ${isModal ? 64 : 0}px;
    margin-top: ${isModal ? 16 : 32}px;
    text-align: ${isModal ? 'center' : 'left'};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const Value = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const WithinDiet = styled.View<WithinDietProps>`
  flex-direction: row;
  margin-top: 32px;
  width: 144px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  ${({ theme, inDiet }) => css`
    border-color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6};
    background-color: ${theme.COLORS.GRAY_6};
  `};
`;

export const WithinDietStatus = styled.View<WithinDietProps>`
  margin: 8px;  
  align-self: center;
  width: 8px;
  height: 8px;
  border-radius: 20px;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const WithinDietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Buttons = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 8px;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ButtonPrimaryIcon = styled(PencilLine).attrs({
  size: 18
})`
  margin-right: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonPrimaryText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

export const ButtonSecondary = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 32px;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonSecondaryIcon = styled(Trash).attrs({
  size: 18
})`
  margin-right: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ButtonSecondaryText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

export const ModalRemove = styled.Modal.attrs({
  transparent: true
})``;

export const ModalRemoveContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: 'rgba(0,0,0,0.2)';
  `;

export const ModalRemoveContent = styled.View`
  height: 192px;
  margin: 0px 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const ModalRemoveButtons = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const ModalRemoveButtonPrimary = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 16px 0px;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ModalRemoveButtonPrimaryText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

export const ModalRemoveButtonSecondary = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalRemoveButtonSecondaryText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;