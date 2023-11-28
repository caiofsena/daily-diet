import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';

export function Detail({ route } : PropsNavigation<'detail'>) {
  const { inDiet } = route.params;

  return (
    <S.Container inDiet={inDiet}>
      <S.Header>
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
        <S.HeaderTitle>
          <S.HeaderTitleValue>Refeição</S.HeaderTitleValue>
        </S.HeaderTitle>
      </S.Header>
      <S.General>
        <S.Label>
          Nome
        </S.Label>
        <S.Value>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </S.Value>
        <S.Label>
          Data e hora
        </S.Label>
        <S.Value>
          12/08/2022 às 16:00
        </S.Value>
        <S.WithinDiet inDiet={inDiet}>
            <S.WithinDietStatus inDiet={inDiet} />
            <S.WithinDietText>{inDiet ? 'dentro da dieta' : 'fora da dieta'}</S.WithinDietText>
        </S.WithinDiet>
        <S.Buttons>
          <S.ButtonPrimary>
            <S.ButtonPrimaryIcon />
            <S.ButtonPrimaryText>Editar refeição</S.ButtonPrimaryText>
          </S.ButtonPrimary>
          <S.ButtonSecondary>
            <S.ButtonSecondaryIcon />
            <S.ButtonSecondaryText>Excluir refeição</S.ButtonSecondaryText>
          </S.ButtonSecondary>
        </S.Buttons>
      </S.General>
      <S.ModalRemove animationType='fade'>
        <S.ModalRemoveContainer>
          <S.ModalRemoveContent>
            <S.Label isModal>
              Deseja realmente excluir o registro da refeição?
            </S.Label>
            <S.ModalRemoveButtons>
              <S.ModalRemoveButtonSecondary>
                <S.ModalRemoveButtonSecondaryText>Cancelar</S.ModalRemoveButtonSecondaryText>
              </S.ModalRemoveButtonSecondary>
              <S.ModalRemoveButtonPrimary>
                <S.ModalRemoveButtonPrimaryText>Sim, excluir</S.ModalRemoveButtonPrimaryText>
              </S.ModalRemoveButtonPrimary>
            </S.ModalRemoveButtons>
          </S.ModalRemoveContent>
        </S.ModalRemoveContainer>
      </S.ModalRemove>
    </S.Container>
  );
}
