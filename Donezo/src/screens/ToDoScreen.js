import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context as TaskContext } from '../context/TaskContext';
import TaskModal from "~/components/TaskModal";
import AddButton from "~/components/AddButton";

const ToDoScreen = () => {
  const { state, deleteTask } = useContext(TaskContext);
  const [modalVisibility, setmodalVisibility] = useState(false);

  const renderTask = ({ task }) =>  {
    console.log(task);

    return(
      <View style={styles.task}>
        <Text>{task.title}</Text>
        <Button title="Delete" onPress={() => deleteTask(task.id)} />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <AddButton onPress={() => setmodalVisibility(true)}/>
        
      <FlatList
        data={state.tasks}
        keyExtractor={(task) => {return task.id}}
        renderItem={renderTask}
      />

      <TaskModal
          isVisible={modalVisibility}
          onClose={() => setmodalVisibility(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    task: {
      padding: 16,
      marginVertical: 8,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
    }
});

export default ToDoScreen;