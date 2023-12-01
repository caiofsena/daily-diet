import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type OverviewProps = {
  inDiet: boolean;
}

export const Container = styled(SafeAreaView)<OverviewProps>`
  flex: 1;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs<OverviewProps>(({ theme, inDiet }) => ({
  color: inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-top: 8px;
  margin-right: 8px;
  align-self: flex-end;
`;

export const General = styled.View`
  flex: 1;
  margin-top: 32px;
  margin-bottom: -36px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const GeneralTitle = styled.Text`
  margin-top: 32px;
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const Statistics = styled.TouchableOpacity`
  margin-top: 8px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const StatisticsIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK
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
  margin-bottom: 16px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const BestSequence = styled.TouchableOpacity`
  margin: 32px 32px 8px 32px;
  padding: 16px 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const BestSequenceValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;  
  `};
`;

export const BestSequenceDescription = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const RecordedMeals = styled.TouchableOpacity`
  margin: 16px 32px 8px 32px;
  padding: 16px 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const RecordedMealsValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;  
  `};
`;

export const RecordedMealsDescription = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;  
  `};
`;

export const DailyMeals = styled.View`
  flex-direction: row;
  margin: 8px 32px;
`;

export const DailyMealsIn = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const DailyMealsInValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;  
  `};
`;

export const DailyMealsInDescription = styled.Text`
  margin-top: 8px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const DailyMealsOut = styled.TouchableOpacity`
  flex: 1;
  margin-left: 16px;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const DailyMealsOutValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;  
  `};
`;

export const DailyMealsOutDescription = styled.Text`
  margin-top: 8px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;