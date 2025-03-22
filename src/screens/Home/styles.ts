import Logo from '@assets/images/Logo';
import { ArrowUpRight, Plus } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Meal } from 'src/@types';
import styled, { css } from 'styled-components/native';

type MealsCardProps = {
  inDiet: Meal['inDiet'];
}

type Statistics = {
  healthyDiet: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding:  8px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoSvg = styled(Logo)``;

export const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 20px;
`;

export const Statistics = styled.TouchableOpacity<Statistics>`
  margin-top: 32px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, healthyDiet }) => healthyDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const StatisticsIcon = styled(ArrowUpRight).attrs<Statistics>(({ theme, healthyDiet }) => ({
  color: healthyDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-top: 8px;
  margin-right: 8px;
  align-self: flex-end;
`;

export const StatisticsPercentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;  
  `};
`;

export const StatisticsDescription = styled.Text`
  /* margin-bottom: 16px; */
  padding: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Meals = styled.View`
  margin-top: 32px;
`;

export const MealsTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;  
  `};
`;

export const MealsButtonNew = styled.TouchableOpacity`
  padding: 16px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const MealsIconNew = styled(Plus).attrs({
  size: 18
})`
  margin-right: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MealsTextNew = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

export const MealsList = styled.SectionList`
  margin-top: 16px;
`;

export const MealsHeader = styled.Text`
  margin-bottom: 8px;
  margin-top: 16px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `};
`;

export const MealsCard = styled.TouchableOpacity`
  margin: 4px 0px;
  padding: 8px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const MealsCardHour = styled.Text`
  margin: 8px;
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;  
  `};
`;

export const MealsDivider = styled.View`
  margin: 8px 0px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const MealsCardName = styled.Text`
  flex: 1;
  margin: 8px;
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const MealsCardInDiet = styled.View<MealsCardProps>`
  margin: 8px;  
  align-self: center;
  width: 14px;
  height: 14px;
  border-radius: 20px;
  background-color: ${({ theme, inDiet }) => inDiet === 'yes' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;



