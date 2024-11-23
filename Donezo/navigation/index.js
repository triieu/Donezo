import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../src/components/BackButton';
import Overview from '../src/screens/overview';
import CalendarScreen from '../src/screens/CalendarScreen';
import ToDoScreen from '../src/screens/ToDoScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen
          name="To Do"
          component={ToDoScreen}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
