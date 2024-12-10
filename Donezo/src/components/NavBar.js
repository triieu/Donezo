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
        height: 80
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#dbdbdb',
        width: '100%',
        height: 70
    },
    button: {
        flex:1,
        borderColor: 'black',
        borderTopWidth: 1,
        paddingVertical: 10
    },
    icons: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    }
});

export default NavBar;