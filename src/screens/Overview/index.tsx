import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';

export function Overview({ navigation, route } : PropsNavigation<'overview'>) {

  const { inDiet } = route.params; 
  console.log('PARAMS: ', route.params);

  return (
    <S.Container inDiet={inDiet}>
      <S.Header>
        <S.BackButton onPress={navigation.goBack}>
          <S.BackIcon inDiet={inDiet} />
        </S.BackButton>
      </S.Header>
      <S.Statistics>
        <S.StatisticsPercentage>
          90,86%
        </S.StatisticsPercentage>
        <S.StatisticsDescription>
          das refeições dentro da dieta
        </S.StatisticsDescription>
      </S.Statistics>
      <S.General>
        <S.GeneralTitle>
          Estatísticas gerais
        </S.GeneralTitle>
        <S.BestSequence>
          <S.BestSequenceValue>
            22
          </S.BestSequenceValue>
          <S.BestSequenceDescription>
          melhor sequência de pratos dentro da dieta
          </S.BestSequenceDescription>
        </S.BestSequence>
        <S.RecordedMeals>
          <S.RecordedMealsValue>
            109
          </S.RecordedMealsValue>
          <S.RecordedMealsDescription>
          refeições registradas
          </S.RecordedMealsDescription>
        </S.RecordedMeals>
        <S.DailyMeals>
          <S.DailyMealsIn>
            <S.DailyMealsInValue>
              99
            </S.DailyMealsInValue>
            <S.DailyMealsInDescription>
              refeições dentro da dieta
            </S.DailyMealsInDescription>
          </S.DailyMealsIn>
          <S.DailyMealsOut>
            <S.DailyMealsOutValue>
              10
            </S.DailyMealsOutValue>
            <S.DailyMealsOutDescription>
              refeições fora da dieta
            </S.DailyMealsOutDescription>
          </S.DailyMealsOut>
        </S.DailyMeals>
      </S.General>
    </S.Container>
  );
}
