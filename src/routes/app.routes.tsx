import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Form } from "@screens/Form";
import { Overview } from "@screens/Overview";
import { Home } from "@screens/Home";
import { Message } from "@screens/Message";
import { RootStackParamList } from "src/@types/navigation";
import { Detail } from "@screens/Detail";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="overview" component={Overview} />
      <Screen name="form" component={Form} />
      <Screen 
        name="message" 
        component={Message} 
        initialParams={
          { 
            title: 'teste',
            subtitle: {
              begin: 'inicio. ',
              bold: 'negrito: ',
              end: 'fim.'
            },
            image: require('@assets/images/in-diet.png'),
            buttonText: 'teste'
          }
        } 
      />
      <Screen name="detail" component={Detail} initialParams={{ inDiet: false }} /> 
    </Navigator>
  );
}