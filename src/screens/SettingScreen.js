import React, { useState } from 'react'
import { View, Text ,Button,TextInput,StyleSheet,ScrollView,Dimensions,TouchableOpacity} from 'react-native'

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SettingScreen = ({navigation}) => {

    return (
        <View>
           <ScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center',marginTop:10*vh }}>
                <Text style={styles.text}>Register</Text>
                <TextInput
                
                    placeholder="First_name"
                    style={styles.holder}
        
                />
                 <TextInput
                
                placeholder="Last_name"
                style={styles.holder}
    
            />
                <TextInput
                    placeholder="Email"
                    style={styles.holder}
            
                />
                <TextInput
                    placeholder="Address"
                    style={styles.holder}
            
                />
                <TextInput
                    placeholder="Password"
                    style={styles.holder}
            
                />
                 <TouchableOpacity style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Signup</Text>
     </TouchableOpacity>
            <Text>Or</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}
            style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Back To Login</Text>

     </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:35,
        
    },
    holder:{
      borderWidth:2,
      borderColor:"#48bab1",
      width:200,
      marginTop:10
    }
})

export default SettingScreen
