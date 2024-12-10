import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { Context as TaskContext } from '~/context/TaskContext';

const BottomProgressBar = () => {
    const { state } = useContext(TaskContext);
    const [progress, setProgress] = useState(0);
    const [emote, setEmote] = useState('neutral');

    // for progress bar
    const screenWidth = Dimensions.get('window').width;

    // calculate completion percentage
    useEffect(() => {
        const totalTasks = state.tasks.length;
        const completedTasks = state.tasks.filter(task => task.completed).length;
        const completionPercentage = totalTasks ? completedTasks / totalTasks : 0;

        setProgress(completionPercentage)

        if (completionPercentage === 1) {
            setEmote('yippie');     // 100%
        } else if (completionPercentage > 0.4) {
            setEmote('neutral');    // 50% - 100%
        } else {
            setEmote('sad');        // 0% - 50%
        }

    }, [state.tasks]);

    return (
        <View style={styles.container}>
            <Progress.Bar
                progress={progress || 0}
                width={screenWidth * 0.75}
                height={20}
                borderRadius={10}
                color='#97bac9'
                marginRight={10}
            />
            <Image
                source={emote === 'yippie' ? require('assets/happy-49-512.png') :
                    emote === 'neutral' ? require('assets/neutral-1-512.png') :
                    require('assets/sad-12-512.png')}
                style={styles.emote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80, // Space above navigation bar
        left: 0,
        right: 0,
        height: 80,
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emote: {
        width: 50,
        height: 50,
        //marginHorizontal: 10
    }
});

export default BottomProgressBar;