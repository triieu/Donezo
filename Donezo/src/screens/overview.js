import { useNavigation } from '@react-navigation/native';
import { ScreenContent } from '~/components/ScreenContent';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';

export default function Overview() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScreenContent path="work on user auth and persistent data?" title="Test" />
      <Button
        onPress={() =>
          navigation.navigate("To Do")
        }
        title="To Do"
      />
      <Button
        onPress={() =>
          navigation.navigate("Calendar")
        }
        title="Calendar"
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
