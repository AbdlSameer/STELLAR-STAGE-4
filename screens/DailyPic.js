import React, { Component } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar,Image, Alert, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import axios from 'axios';
import WebView from 'react-native-webview';



export default class DailyPicScreen extends Component {

        constructor(props){
            super(props)
            this.state ={
                apod: [],
            }
        }

        getApod = ()=>{
            axios
                .get("https://api.nasa.gov/planetary/apod?api_key=sFBxenmrhE5gbgLeEoLh4qCapeMicXS4NfZ2cQtc")
                .then(response => {
                    this.setState({ apod: response.data })
                })
                .catch(error => {
                    Alert.alert(error.message)
                })
            
        }

    render() {
        return (
            <View
            style={styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <ImageBackground source={require("../assets/space.gif")} style = {styles.backgroundImage}>
                    
                        <Text style = {styles.routeText}>Daily Pic</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>
                        <TouchableOpacity style = {styles.listContainer}
                            onPress={() => Linking.openURL(this.state.apod.title).catch(err => console.error("Couldn't load page", err))}>
                                <View style = {styles.iconContainer}>
                                    <Image source={require("../assets/play-video.png")} style = {{ width: 50, height: 50}}></Image>
                                    <Text style = {styles.text}>Astronomy Picture of the day</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                            
                    </ImageBackground>
     
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 90,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#FF4FC4",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
        // margin: 10,
        // textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});
