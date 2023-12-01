import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';
import { Controller, useForm } from 'react-hook-form';
import { mealsAdd } from '@storage/index';
import { Alert } from 'react-native';
import { Meal } from 'src/@types';

export function Form({ navigation } : PropsNavigation<'form'>) {
  const [ inDiet, setInDiet ] = React.useState<Meal['inDiet']>();
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<Meal>({
    defaultValues: {}
  });

  function handleInDiet(inDiet: Meal['inDiet']) {
    setValue('inDiet', inDiet);
    setInDiet(inDiet)
  }

  async function saveMeal(meal: Meal) {
    try {
      await mealsAdd(meal);
      navigation.navigate('message', {
        title: 'Continue assim!',
        subtitle: {
          begin: 'Você continua ',
          bold: 'dentro da dieta. ',
          end: 'Muito bem!'
        },
        image: require('@assets/images/in-diet.png'),
        buttonText: 'Ir para a página inicial'
      })
    } catch (error) {
      Alert.alert('Ocorreu um erro insperado!');      
    }
    
  }

  return (
    <S.Container>
    <S.Header>
        <S.BackButton onPress={navigation.goBack}>
          <S.BackIcon />
        </S.BackButton>
        <S.HeaderTitle>
          <S.HeaderTitleValue>Nova refeição</S.HeaderTitleValue>
        </S.HeaderTitle>
      </S.Header>
        <S.General>
          <S.Prevent>
          <S.Label>
            Nome
          </S.Label>
          <Controller
            control={control}
            rules={{
              required: 'Campo obrigatório',
              maxLength: {
                value: 40,
                message: 'Campo deve conter no máximo 40 caracteres'
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <S.Input 
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}   
              />
            )}
            name="name"
          />
          {errors.name && <S.Error>{errors.name?.message}</S.Error>}
          <S.Label>
            Descrição
          </S.Label>
          <Controller
            control={control}
            rules={{
              required: 'Campo obrigatório',
              maxLength: {
                value: 200,
                message: 'Campo deve conter no máximo 200 caracteres'
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <S.InputLarge 
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}   
                numberOfLines={8}
              />
            )}
            name="description"
          />
          {errors.description && <S.Error>{errors.description.message}</S.Error>}
          <S.DateHour>
            <S.Date>
              <S.Label>
                Data
              </S.Label>
              <Controller
                control={control}
                rules={{
                  required: 'Campo obrigatório',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.InputMasked
                    mask='99/99/9999'
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
                name="date"
              />
              {errors.date && <S.Error>{errors.date.message}</S.Error>} 
            </S.Date>
            <S.Hour>
              <S.Label>
                Hora
              </S.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.InputMasked
                    mask='99:99'
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
                name="hour"
              />
              {errors.hour && <S.Error>Campo obrigatório</S.Error>}
            </S.Hour>
          </S.DateHour>
          <S.Label>Está dentro da dieta?</S.Label>
          <S.WithinDiet>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={() => (
                <>
                  <S.Yes onPress={() => handleInDiet('yes')} selected={inDiet === 'yes'}>
                    <S.WithinDietStatus value='yes' />
                    <S.WithinDietText>Sim</S.WithinDietText>
                  </S.Yes>
                  <S.No onPress={() => handleInDiet('no')} selected={inDiet === 'no'}>
                    <S.WithinDietStatus value='no' />
                    <S.WithinDietText>Não</S.WithinDietText>
                  </S.No>
                </>
              )}
              name="inDiet"
            />
          </S.WithinDiet>
          {errors.inDiet && <S.Error>Campo obrigatório</S.Error>}
          <S.Register>
            <S.ButtonRegister onPress={handleSubmit(saveMeal)}>
              <S.ButtonRegisterText>Cadastrar refeição</S.ButtonRegisterText>
            </S.ButtonRegister>
          </S.Register>
      </S.Prevent>
        </S.General>
    </S.Container>
  );
}
