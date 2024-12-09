import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, Image } from 'react-native';

const NavBar = ( { navigation } ) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {navigation.navigate("To Do")}}
                >
                    <Image style={styles.icons} source={require('assets/to-do-list-8-512.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {navigation.navigate("Calendar")}}
                >
                    <Image style={styles.icons} source={require('assets/calendar-188-512.png')}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'black',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
    },
    button: {
        backgroundColor: '#dbdbdb',
        flex:1,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 5
    },
    icons: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    }
});

export default NavBar;