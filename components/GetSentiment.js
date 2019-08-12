import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class GetSentiment extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text:'',
            sentiment:'2.0',
            analysis:'Neutral'
        };
    }

    fetchSentimentHandler = ()  => {
        console.log("Finding Sentiment: " + this.state.text)

        const encodedValue = encodeURIComponent(this.state.text);
        console.log(`https://g-sentiment.herokuapp.com/?query=${encodedValue}`)

        fetch(`https://g-sentiment.herokuapp.com/?query=${encodedValue}`)
            .then(response => response.json())
            .then(json => {
                console.log(JSON.stringify(json))
                r = (json.sentiment).toFixed(4)
                this.setState({sentiment:json.sentiment, analysis:json.prediction})
                
            })
            .catch(err => console.log(err));
    };


    render() {

        return(
            <View style={{
                marginTop: 40,
                alignItems: 'center'
            }}>
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={styles.textbox}
                        autoFocus={true}
                        placeholder="Give Me a Topic!"
                        value = {this.state.text}
                        onChangeText={(text) => {this.setState({text:text})}}
                        onSubmitEditing = {() => this.fetchSentimentHandler()}
                        returnKeyType = 'search'
                        maxLength={50}
                    /> 
                </View>
                
                <View>
                    <TouchableOpacity onPress = {() => this.fetchSentimentHandler()}>
                        <View style = {styles.Button}>
                            <Text style = {{textAlign: 'center', color: 'white', fontSize: 20}}>Get Sentiment!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                

                <View >
                    <Text style={styles.results}>Analysis: {this.state.analysis}</Text>
                    <Text style ={styles.results}>Rating: {this.state.sentiment}</Text>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    textbox: {
        margin: 30,
        height: 70,
        backgroundColor: '#c0ecfa',
        borderRadius: 25,
        flex: 2,
        textAlign: 'center',
        fontSize: 30,

    },
    Button: {
        margin: 10,
        borderRadius: 25,
        fontSize: 30,
        width: 150,
        height: 70,
        backgroundColor: '#00aced',
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    results: {
        textAlign: 'center',
        color: '#111144',
        marginVertical: 10,
        fontSize: 24,
      
    },
  
  });
  