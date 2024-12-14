import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { Context as TaskContext } from '../context/TaskContext';
import DateTimePicker from '@react-native-community/datetimepicker';

const DetailScreen = ({ route, navigation }) => {
    const { state, updateTask, deleteTask } = useContext(TaskContext);
    const { taskId } = route.params;

    const task = state.tasks.find((task) => {
        return taskId === task.id;
    })
    const [title, setTitle] = useState(task?.title || "");
    const [note, setNote] = useState(task?.note || "");
    const [date, setDate] = useState(task?.date ? new Date(task.date) : null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(()=> {
        if (!task) {
            navigation.goBack();
        }
    }, [task]);

    const handleSave = () => {
        updateTask(taskId, { title, note, date });
        navigation.goBack();
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    
    return <View style={styles.container}>
        {/* TITLE */}
        <TextInput
            style={styles.titleContainer}
            value={title}
            onChangeText={setTitle}
            placeholder="Task title"
        />

        {/* DUE DATE */}
        <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={styles.dateContainer}>
            <Text style={styles.rowLabel}>Due Date</Text>
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
                    style={styles.datePicker}
                />
            ) : (
                <Text style={styles.rowValue}>
                    {date ? date.toDateString() : "Set due date"}
                </Text>
            )}
            
        </TouchableOpacity>

        {/* NOTES */}
        <Text style={styles.noteHeader}>Notes</Text>
        <TextInput
            style={styles.noteContainer}
            value={note}
            onChangeText={setNote}
            placeholder="Add note"
            multiline
        />

        {/* SAVE AND DELETE */}
        <View style={styles.buttonContainer}>
            <Button title="Save" onPress={handleSave}/>
            <Button
                title="Delete"
                color="red"
                onPress={() => {
                    deleteTask(taskId);
                    navigation.goBack();
                }}
            />
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingHorizontal: '10%',
        paddingVertical: 5,
        alignSelf: 'center'
    },
    sectionLabel: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 10,
    },
    noteContainer: {
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    rowLabel: {
        fontSize: 16,
        fontWeight: "500",
    },
    rowValue: {
        fontSize: 16,
        color: "#888",
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    noteHeader: {
        fontSize: 18,
        padding: 10
    }
});

export default DetailScreen;