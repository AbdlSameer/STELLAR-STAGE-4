import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source = {require("../assets/stars.gif")} style = {styles.backgroundImage}>
                    <Image source = {require("../assets/main-icon.png")} style = {styles.mainIconImage}></Image>
                    
                    <View style = {styles.titleBar}>    
                    <Text style = {styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style = {styles.routeCard} onPress = {() => 
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style = {styles.routeText}>Space Crafts</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source = {require("../assets/space_crafts.png")} style = {styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.routeCard} onPress = {() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style = {styles.routeText}>Star Map</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source = {require("../assets/star_map.png")} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style = {styles.routeCard} onPress = {() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style = {styles.routeText}>Daily Pictures</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image source = {require("../assets/daily_pictures.png")} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 50
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 40,
        backgroundColor: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    iconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    mainIconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: "35%",
        top: 80,
        
    }
})