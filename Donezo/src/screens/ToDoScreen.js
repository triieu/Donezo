import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { Context as TaskContext } from '../context/TaskContext';
import TaskModal from "~/components/TaskModal";
import NavBar from "~/components/NavBar";

const ToDoScreen = ({ navigation, route }) => {
  const { addTask } = useContext(TaskContext);
  const { state } = useContext(TaskContext);

  const [modalVisibility, setModalVisibility] = useState(false);
  useEffect(() => {
    if (route?.params?.modalVisibility) {
      setModalVisibility(true);
    }
  }, [route]) 

  const [detailedTask, setDetailedTask] = useState({      // probably only display title
    tite: '',
    note: '',
    time: '',
    date: ''
  });

  const renderTask = ({ item }) =>  {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Details", { taskId: item.id })}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleDetailedTask = () => {
    if (detailedTask.title.trim()) {
      addTask({detailedTask});
      setDetailedTask({ title: '', notes: '', time: '', date: '' });  // rest
      setModalVisibility(false);  // close modal
    }
  };
  
  return (
    <View style={styles.container}>

      <TaskModal
          isVisible={modalVisibility}
          onClose={() => setModalVisibility(false)}
          onSubmit={handleDetailedTask}
          taskData={detailedTask}
          setTaskData={setDetailedTask}
      />

      <FlatList
        data={state.tasks}
        keyExtractor={(task) => {return task.id}}
        renderItem={renderTask}
      />

      <NavBar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    taskContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      backgroundColor: '#f9f9f9',
    },
    text: {
      fontSize: 18
    },
    taskInformation: {

    }
});

export default ToDoScreen;