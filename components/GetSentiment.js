import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

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

        const that = this
        fetch(`https://g-sentiment.herokuapp.com/?query=${encodedValue}`)
            .then(response => response.json())
            .then(json => {
                console.log(JSON.stringify(json))
                this.setState({sentiment:json.sentiment, analysis:json.prediction})
                
            })
            .catch(err => console.log(err));
    };


    render() {

        return(
            <View>
                <TextInput
                    style={{height:40}}
                    placeholder="Type a Topic to Get the Sentiment of! e.g. 'Donald Trump'"
                    value = {this.state.text}
                    onChangeText={(text) => {this.setState({text:text})}}
                    maxLength={50}
                />
                <Button 
                    title="Get Sentiment"
                    onPress = {() => this.fetchSentimentHandler()}>                  
                </Button>

                <View>
                    <Text>Analysis: {this.state.analysis}</Text>
                    <Text>Rating: {this.state.sentiment}</Text>
                </View>
            </View>
        );
    }

}


