import React, { useState, useContext } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Context } from "../context/TaskContext";

const TaskModal = ({ isVisible, onClose }) => {
    const [task, setTask] = useState('');
    const { addTask } = useContext(Context);
    
    const handleAddTask = () => {
        addTask(task);
        setTask('');
        onClose();
    }

    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>Create New Task</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Task Title"
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={onClose} />
                        <Button title="Add Task" onPress={handleAddTask} />
                    </View>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default TaskModal;