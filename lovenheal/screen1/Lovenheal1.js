import React, {Component} from 'react';
import {Button,StyleSheet,View,Text,TextInput,CheckBox} from 'react-native';
import HomeScreen from './HomeScreen';

//import Tooltip from 'rn-tooltip';
//import { Component } from 'react';

const lovenheal = ({navigation})=>{
    const [Name,setName]=React.useState('Name');
    const [Email,setEmail]=React.useState('Email');
    const [Address,setAddress]=React.useState('Current address');
    const [Problem,setProblem]=React.useState('Problem');
    const[isSelected,setSelection]=React.useState(true);
    const title1="Waiting to connect…";
    return(
       // const title1"Waiting to connect…";
        <View>
           <Text>Enter Name:</Text>
           <TextInput
           style={{height:40,borderColor:'grey',borderWidth:1}}
           onChangeText={text=>setName(text)}
           value={Name}/>
          <Text>Enter Email:</Text>
           <TextInput
           style={{height:40,borderColor:'grey',borderWidth:1}}
           onChangeText={text=>setEmail(text)}
           value={Email}/>
           {/*<Tooltip tooltipWidth={200} tootiptext="enter complete address inclucing city, state, country."> </Tooltip>*/}
         <TextInput
                    multiline={true}
                    numberofLines={4}
                    onChangeText={text=>{setAddress(text)}}
                    value={Address}
                    editable
                    maxLength={40}/>
          <TextInput
           style={{height:40,borderColor:'grey',borderWidth:1}}
           onChangeText={text=>setProblem(text)}
           value={Problem}/>

           <View style={styles.checkboxContainer}>
               <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}/>
                <Text style={styles.lable}>This healing is for me</Text>
           </View>
           <View>
               {Name.length < 1 ? <Text>Please fill in the mandatory fields</Text> : null}
           </View>

            <Button 
              
               title="Submit"/>
        </View>
        
    );

};



const styles=StyleSheet.create({
    text:{
       fontSize: 30
    },
    checkbox:{
        alignSelf:"center",
    },
    label:{
        margin:8,
    },
    checkboxContainer:{
        flexDirection:"row",
        marginBottom:20,
    },
    
});

export default lovenheal;