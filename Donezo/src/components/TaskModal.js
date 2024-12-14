import React, { useState, useContext } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from "../context/TaskContext";
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskModal = ({ isVisible, onClose }) => {
    const [task, setTask] = useState('');
    const { addTask } = useContext(Context);

    // date stuff
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    }

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task, date);
            setTask('');
            setDate(new Date());
            onClose();
        }
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

                    {/* DATE STUFF */}
                    <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={styles.dateContainer}>
                        <Text style={styles.dateTitle}>Date: </Text>
                        {showDatePicker ? (
                            <DateTimePicker
                                value={date || new Date()}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) {
                                        setDate(selectedDate);
                                    }
                                }}
                            />
                        ) : (
                            <Text style={styles.rowValue}>
                                {date ? date.toDateString() : "Set due date"}
                            </Text>
                        )}
                        
                    </TouchableOpacity>


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
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    dateTitle: {
        fontSize: 18,
        marginRight: 10
    },
    rowValue: {
        fontSize: 18
    },
});

export default TaskModal;