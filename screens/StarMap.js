import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, Image, Alert, Platform, ImageBackground, TextInput} from 'react-native';
import { WebView } from 'react-native-webview'
import axios from 'axios'

export default class StarMapScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            latitude: {},
            longitude: {},
        };
    }

    
    componentDidMount() {
        this.getConstellation()
    }

    getConstellation = () => {
        axios
            .get("https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlables=true&gridlines_az=true&projection=stereo&showdate=false&showposition=false")
            .then(response => {
                this.setState({  
                    latitude: response.data,
                    longitude: response.data
                })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    
    render() {
        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlables=true&gridlines_az=true&projection=stereo&showdate=false&showposition=false'
      
        return (
            <View
                style={styles.container}>
                     <SafeAreaView style={styles.droidSafeArea} />
                     <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
                     <View style={styles.titleContainer}> 
                       <Text style={styles.titleText}>Star Map</Text>
                     </View>
                     <View style={styles.webContainer}>
                     <WebView
                        scalesPageToFit={true}
                        source={{uri: "https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlables=true&gridlines_az=true&projection=stereo&showdate=false&showposition=false"}}
                        style={{marginTop:20, marginBottom: 20.}}
                    />
                     </View>
                     <View>
                         
                         <TextInput 
                            style={{height: 40, borderColor: 'gray', borderRadius:20, justifyContent: 'center', borderWidth: 1, color: 'white'}}
                            placeholder="Enter your latitude"
                            placeholderTextColor = 'white'
                            onChangeText={(text)=>{
                                this.setState({
                                    latitude: text
                                })
                            }}
                         />

                        <TextInput 
                            style={{height: 40,marginTop: 50,borderRadius:20, borderColor: 'gray', borderWidth: 1, color: 'white'}}
                            placeholder="Enter your longitude"
                            placeholderTextColor = 'white'
                            onChangeText={(text)=>{
                                this.setState({
                                    longitude: text
                                })
                            }}
                         />         
                     </View>
                </ImageBackground>
            </View>
        )
 
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'black',
        
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 25,
        marginLeft: "25%",
        color: "white",
        fontWeight: "bold",
        justifyContent: "center"
    },
    webContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    }
})

