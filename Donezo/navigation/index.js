import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../src/screens/overview';
import CalendarScreen from '../src/screens/CalendarScreen';
import ToDoScreen from '../src/screens/ToDoScreen';
import AddButton from '~/components/AddButton';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="To Do">
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen
          name="To Do"
          component={ToDoScreen}
          options={({ navigation }) => ({
            headerLeft: () => <AddButton onPress={() => navigation.navigate('To Do', { modalVisibility: true })} />,
          })}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={({ navigation }) => ({
            headerLeft: () => <AddButton onPress={() => navigation.navigate('Calendar', { modalVisibility: true })} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
