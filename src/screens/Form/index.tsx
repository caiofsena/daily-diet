import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';

export function Form({ navigation } : PropsNavigation<'form'>) {
  return (
    <S.Container>
      <S.Header>
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
        <S.HeaderTitle>
          <S.HeaderTitleValue>Nova refeição</S.HeaderTitleValue>
        </S.HeaderTitle>
      </S.Header>
      <S.General>
        <S.Label>
          Nome
        </S.Label>
        <S.Input />
        <S.Label>
          Descrição
        </S.Label>
        <S.InputLarge numberOfLines={8} />
        <S.DateHour>
          <S.Date>
            <S.Label>
              Data
            </S.Label>
            <S.Input />
          </S.Date>
          <S.Hour>
            <S.Label>
              Hora
            </S.Label>
            <S.Input />
          </S.Hour>
        </S.DateHour>
        <S.Label>Está dentro da dieta?</S.Label>
        <S.WithinDiet>
          <S.Yes>
            <S.WithinDietStatus value='yes' />
            <S.WithinDietText>Sim</S.WithinDietText>
          </S.Yes>
          <S.No selected>
            <S.WithinDietStatus value='no' />
            <S.WithinDietText>Não</S.WithinDietText>
          </S.No>
        </S.WithinDiet>
        <S.Register>
          <S.ButtonRegister>
            <S.ButtonRegisterText>Cadastrar refeição</S.ButtonRegisterText>
          </S.ButtonRegister>
        </S.Register>
      </S.General>
    </S.Container>
  );
}
