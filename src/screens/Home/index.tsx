import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';
import { Meal } from 'src/@types';
import { mealsGetAll } from '@storage/index';
import { useFocusEffect } from '@react-navigation/native';

type MealsSectionList = {
  title: string;
  data: Meal[];
};

export function Home({ navigation } : PropsNavigation<'home'>) {
  const [ list, setList ] = React.useState<MealsSectionList[]>([]);
  const [ storageList, setStorageList ] = React.useState<Meal[]>([]);
  const [ percentageDiet, setPercentageDiet ] = React.useState('');
  const [ healthyDiet, setHealthyDiet ] = React.useState(true);

  function goStatistics() {
    navigation.navigate('overview', {
      inDiet: healthyDiet
    });
  }

  function goNewMeal() {
    navigation.navigate('form');
  }

  function getStatisticsDiet() {
    const totalDiet = storageList.length;
    const inDiet = storageList.filter(item => item.inDiet === 'yes').length;
    const percentageInDiet = (100 * inDiet / totalDiet);
    console.log('PERCENTAGE: ', inDiet, totalDiet, percentageDiet);

    if (percentageInDiet >= 60) 
      setHealthyDiet(true);
    else 
      setHealthyDiet(false);

    setPercentageDiet(percentageInDiet.toFixed(2));
  }

  async function getStorageList() {
    const storage: Meal[] = await mealsGetAll();
    setStorageList(storage);

    const dateList = 
      [...new Map(storage.map(item => [item.date, item])).values()].map(value => value.date)
    console.log('DATE LIST: ', dateList);
    let mealsSectionList: MealsSectionList[] = [];
    dateList.forEach(date => {
      let data: Meal[] = [];
      storage.forEach(meal => {
        if (meal.date === date) { 
          data.push({
            ...meal
          })
        }
      })
      mealsSectionList.push({
        title: date.replaceAll('/', '.'),
        data 
      })
    })
    setList(mealsSectionList);
  }
  
  useFocusEffect(React.useCallback(() => {
    getStorageList();
    getStatisticsDiet();
  }, []));

  return (
    <S.Container>
      <S.Header>
        <S.LogoSvg />
        <S.ProfilePhoto source={require('@assets/images/perfil.jpg')} />
      </S.Header>
      <S.Statistics onPress={goStatistics} healthyDiet={healthyDiet}>
        <S.StatisticsIcon healthyDiet={healthyDiet} />
        <S.StatisticsPercentage>
          {percentageDiet}%
        </S.StatisticsPercentage>
        <S.StatisticsDescription>
          das refeições dentro da dieta
        </S.StatisticsDescription>
      </S.Statistics>
      <S.Meals>
        <S.MealsTitle>
          Refeições
        </S.MealsTitle>
        <S.MealsButtonNew onPress={goNewMeal}>
          <S.MealsIconNew />
          <S.MealsTextNew>Nova refeição</S.MealsTextNew>
        </S.MealsButtonNew>
      </S.Meals>
      <S.MealsList 
        sections={list} 
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
