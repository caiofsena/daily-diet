import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';
import { list } from '@utils/index';
import { Meal } from 'src/@types';

type MealsSectionList = {
  title: string;
  data: Meal[];
}[];

export function Home({ navigation } : PropsNavigation<'home'>) {
  const mealsSectionList: MealsSectionList = [
    {
      title: '12.11.23',
      data: list.filter(item => item.date === '12.11.23')
    },
    {
      title: '11.11.23',
      data: list.filter(item => item.date === '11.11.23')
    }
  ];

  return (
    <S.Container>
      <S.Header>
        <S.LogoSvg />
        <S.ProfilePhoto source={require('@assets/images/perfil.jpg')} />
      </S.Header>
      <S.Statistics>
        <S.StatisticsIcon />
        <S.StatisticsPercentage>
          90,86%
        </S.StatisticsPercentage>
        <S.StatisticsDescription>
          das refeições dentro da dieta
        </S.StatisticsDescription>
      </S.Statistics>
      <S.Meals>
        <S.MealsTitle>
          Refeições
        </S.MealsTitle>
        <S.MealsButtonNew>
          <S.MealsIconNew />
          <S.MealsTextNew>Nova refeição</S.MealsTextNew>
        </S.MealsButtonNew>
      </S.Meals>
      <S.MealsList 
        sections={mealsSectionList} 
        keyExtractor={(item, index) => item + index}
        renderItem={({item}: {item: Meal}) => (
            <S.MealsCard>
              <S.MealsCardHour>{item.hour}</S.MealsCardHour>
              <S.MealsDivider />
              <S.MealsCardName>{item.name}</S.MealsCardName>
              <S.MealsCardInDiet inDiet={item.inDiet} />
            </S.MealsCard>
        )}
        renderSectionHeader={({ section: {title}}) => (
          <S.MealsHeader>{title}</S.MealsHeader>
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
