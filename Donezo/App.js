import 'react-native-gesture-handler';
import RootStack from './navigation';
import { Provider } from "./src/context/TaskContext";

export default function App() {
  return (
    <Provider>
      <RootStack />
    </Provider>
  );
}
