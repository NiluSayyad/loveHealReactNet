import React from 'react';
import {Button,StyleSheet,View} from 'react-native';

const homeScreen = ({navigation}) =>{
   
    return(
        <View>
            <Button 
              onPress={()=>navigation.navigate('Love')}
              title="LovenHeal"/>
      
        </View>
    );

};

const styles=StyleSheet.create({
     text:{
        fontSize: 30
     }
     
});

export default homeScreen;

