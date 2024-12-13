import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { Context as TaskContext } from '../context/TaskContext';
import TaskModal from "../components/TaskModal";
import NavBar from "../components/NavBar";
import BottomProgressBar from "~/components/BottomProgressBar";

const ToDoScreen = ({ navigation, route }) => {
  const { addTask } = useContext(TaskContext);
  const { state, taskCompleted } = useContext(TaskContext);

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

  const selectedDay = route.params?.selectedDay || new Date().getDate();

  const tasks = [
    { id: 1, date: 1, title: 'example 1' },
    { id: 2, date: 15, title: 'example 2' },
    { id: 3, date: new Date().getDate(), title: 'example 3' }
  ];

  const filteredTasks = tasks.filter(task => task.date === selectedDay);

  const renderTask = ({ item }) =>  {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={[styles.checkbox, item.completed && styles.checked]}
          onPress={() => taskCompleted(item.id)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Details", { taskId: item.id })}>
          <Text 
            style={[
              styles.text,
              item.completed && { textDecorationLine: 'line-through' },
              ]}> {item.title}
          </Text>
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

      <BottomProgressBar />

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
      //justifyContent: 'space-between',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      backgroundColor: '#f9f9f9',
    },
    text: {
      fontSize: 20
    },
    checkbox: {
      width: 25,
      height: 25,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#ccc',
      marginRight: 10,
    },
});

export default ToDoScreen;