import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 32px 24px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 64px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;  
  `};
`;

export const Subtitle = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const SubtitleNormal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const SubtitleBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const InDietImage = styled.Image`
  margin-top: 32px;
`;

export const ButtonHome = styled.TouchableOpacity`
  margin-top: 32px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ButtonHomeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;