import React from 'react';
import * as S from './styles';
import { PropsNavigation } from 'src/@types/navigation';

export function Message({
  navigation, route
}: PropsNavigation<'message'>) {
  const { title, subtitle, image, buttonText } = route.params;

  function goHome() {
    navigation.navigate('home');
  }

  return (
    <S.Container>
      { title && <S.Title>{ title }</S.Title> }
      { subtitle && 
        <S.Subtitle>
          <S.SubtitleNormal>
            {subtitle.begin}
            <S.SubtitleBold>{subtitle.bold}</S.SubtitleBold>
            {subtitle.end}
          </S.SubtitleNormal>
        </S.Subtitle> 
      }
      { image && <S.InDietImage source={image} /> }
      { buttonText && 
        <S.ButtonHome onPress={goHome}>
          <S.ButtonHomeText>{ buttonText }</S.ButtonHomeText>
        </S.ButtonHome> 
      }
    </S.Container>
  );
}