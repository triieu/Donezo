import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.addButton}>
        <TouchableOpacity onPress={onPress}>
            <Entypo name="add-to-list" size={24} color="#747d87" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  }
});

export default AddButton;