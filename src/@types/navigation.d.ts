import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  home: undefined;
  overview: undefined;
  form: undefined;
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