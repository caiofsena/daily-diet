import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Meal } from '.';

export type RootStackParamList = {
  home: undefined;
  overview: {
    inDiet: boolean;
  };
  form: undefined | {meal: Meal};
  message: {
    title: string;
    subtitle: {
      begin: string;
      bold: string;
      end: string;
    };
    image: ImageSourcePropType;
    buttonText: string;
  };
  detail: {
    inDiet: boolean;
  };
}

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}

export type PropsNavigation<T> = NativeStackScreenProps<RootStackParamList, T>