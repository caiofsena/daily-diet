import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';
import { Meal } from 'src/@types';
import { convertDate, mealsGetAll, mealsGetId } from '@storage/index';
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

  async function goEditMeal(id: number) {
    const meal = await mealsGetId(id);
    if (meal) {
      navigation.navigate('form', {meal: meal});
    } 
  }

  async function getStatisticsDiet() {
    const totalDiet = storageList.length;
    const inDiet = storageList.filter(item => item.inDiet === 'yes').length;
    const percentageInDiet = (inDiet > 0 ? 100 * inDiet / totalDiet : 0);
    
    if (percentageInDiet >= 60) 
      setHealthyDiet(true);
    else 
    setHealthyDiet(false);
  
    setPercentageDiet(percentageInDiet.toFixed(2));
    console.log('PERCENTAGE: ', inDiet, totalDiet, percentageDiet, healthyDiet);
  }

  async function getStorageList() {
    const storage: Meal[] = await mealsGetAll();
    // const storageDateOrdered = storage.sort((a, b) => a.date < b.date ? -1 : 1);
    setStorageList(storage);

    const dateList = 
      [...new Map(storage.map(item => [item.date, item])).values()]
        .map(value => value.date)
        .sort((a, b) => a > b ? -1 : 1);
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
        title: convertDate(date),
        data,
      })
    })
    setList(mealsSectionList);
  }

  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <S.MealsCard onPress={() => goEditMeal(item.id)}>
        <S.MealsCardHour>{item.hour}</S.MealsCardHour>
        <S.MealsDivider />
        <S.MealsCardName>{item.name}</S.MealsCardName>
        <S.MealsCardInDiet inDiet={item.inDiet} />
      </S.MealsCard>
    )
  }

  useFocusEffect(React.useCallback(() => {
    getStorageList();
  }, []));

  useFocusEffect(React.useCallback(() => {
    getStatisticsDiet();
  }, [list]));

  return (
    <S.Container>
      <S.Header>
        <S.LogoSvg />
        <S.ProfilePhoto source={require('@assets/images/perfil.jpg')} />
      </S.Header>
      { storageList.length !== 0 ? (
        <S.Statistics onPress={goStatistics} healthyDiet={healthyDiet}>
          <S.StatisticsIcon healthyDiet={healthyDiet} />
          <S.StatisticsPercentage>
            {Number(percentageDiet) === 0 ? 'Nenhuma' : `${percentageDiet}%`}
          </S.StatisticsPercentage>
          <S.StatisticsDescription>
            das refeições dentro da dieta
          </S.StatisticsDescription>
        </S.Statistics>
      ) : 
      (
        <S.Statistics>
          <S.StatisticsDescription>
            Aqui você vai ver se está dentro da dieta. Adicione a primeira refeição!
          </S.StatisticsDescription>
        </S.Statistics>
      )}
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
        keyExtractor={(item: Meal, index: number) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title }}: {section: MealsSectionList}) => (
          <S.MealsHeader>{title}</S.MealsHeader>
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}