import React, { useState } from 'react';
import { Text, View, TextInput, Button, Picker } from 'react-native';

const YourApp = () => {
  const convertTemperature = () => {
    var temp = parseFloat(temperature);
    if(isNaN(temp)){
      setResult("Erro");
      return;
    }
    else if(tempTypes[entryTemperature] === tempTypes[resultTemperature]){
      setResult(temperature + tempTypes[resultTemperature]);
    }
    else switch(tempTypes[entryTemperature]){
        case "°C":
          try{
            if(tempTypes[resultTemperature] === "°F"){
              setResult(((temp * 9/5) + 32).toFixed(2) + "°F");
            }
            else{
              setResult((temp + 273.15).toFixed(2) + "K");
            }
          }
          catch{
            setResult("Erro!");
          }
          break;
        case "°F":
          try{
            if(tempTypes[resultTemperature] === "°C"){
              setResult(((temp - 32) * 5/9).toFixed(2) + "°C");
            }
            else{
              setResult(((temp - 32) * 5/9 + 273.15).toFixed(2) + "°F");
            }
          }
          catch{
            setResult("Erro!");
          }
          break;
        case "K":
          try{
            if(tempTypes[resultTemperature] === "°C"){
              setResult((temp - 273.15).toFixed(2) + "°C");
            }
            else{
              setResult(((temp - 273.15) * 9/5 + 32).toFixed(2) + "°F");
            }
          }
          catch{
            setResult("Erro!");
          }
          break;
    }
  }
  const tempTypes = ["°C", "°F", "K"];
  const [result, setResult] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [entryTemperature, setEntry] = useState(0);
  const [resultTemperature, setResultTemperature] = useState(1);
  return (
    <View style={{backgroundColor: "#186665", display: "flex", height: "100%"}}>
      <Text style={{color: "white", textAlign: "center", fontSize: 20}}>Temperature Converter</Text>
      <View style={{display: "flex", flexDirection: "row", backgroundColor: "grey", padding: 20, paddingLeft: 0, paddingRight: 0, marginTop: 20}}>
        <Text style={{width: "20%", textAlign: "center", color: "white"}}>Temperature:</Text>
        <TextInput
          style={{color: "white", textAlign: "center", width: "60%", fontSize: 18}}
          keyboardType="numeric"
          onChangeText={text => {
            if(!isNaN(String(text))){
              setTemperature(text)
            }
          }
          }
          placeholder="0"
        />
        <Picker
          style={{width: "20%", backgroundColor: "whitesmoke"}}
          selectedValue = {entryTemperature}
          onValueChange = {(item) => setEntry(item)}
        >
          <Picker.Item label = "°C" value = {0}/>
          <Picker.Item label = "°F" value = {1} />
          <Picker.Item label = "K" value = {2} />
        </Picker>
      </View>
      <View
        style = {{display: "flex", flexDirection: "row", width: "80%", padding: "5%",
        paddingLeft: 0, paddingRight: 0,
        marginTop: 10, width: "100%", backgroundColor: "#423F39"}}
      >
        <Text style={{width: "20%", color: "white",
        textAlign: "center"}}>Convert to:</Text>
        <Picker
          style={{padding: 10, width: "80%", backgroundColor: "whitesmoke"}}
          selectedValue = {resultTemperature}
          onValueChange = {(item) => setResultTemperature(item)}
        >
          <Picker.Item label = "°C" value = {0}/>
          <Picker.Item label = "°F" value = {1} />
          <Picker.Item label = "K" value = {2} />
        </Picker>
      </View>
      <View style={{marginTop: 20, marginLeft: "25%", width: "50%"}}>
        <Button
          style={{width: 50}}
          onPress = {convertTemperature}
          title = "Convert"
          color="red"
        />
      </View>
      <Text style={{marginTop: 10, color: "white", fontSize: 20, textAlign: "center"}}>Result: {result}</Text>
    </View>
  );
}

export default YourApp;