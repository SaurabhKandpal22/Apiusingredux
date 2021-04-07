import React, { useState } from 'react'
import { View, Text,Dimensions,TextInput, ScrollView, StyleSheet,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'; 


// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;



const HomeScreen = ({navigation}) => {
    // FOR EMAIL
    const[email,setEmail]= useState('')
    const[emailError,setEmailError]=useState('')

//FOR PASSWORD
const[password,setPassword]= useState('')
const[passwordError,setPasswordError]=useState('')
const[message,setMessage]=useState('')



   const signin=async()=>{

     if(email!="" && password!=""){
        //  alert("Thank You For Login")
        await fetch("http://192.168.1.82:8000/login",
    {
     method: "POST",
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
     },
     body: JSON.stringify({
        "email":"abc@yopmail.com",

        "pass":"12345"
    })
    }).then(res=>res.json())
    .then(data=>{
        // setMessage(data.message)
        console.log("data is===>",data)
    })
    

}else{


       if(email!=""){
           alert(email)
           setEmailError("")
       }else{
           setEmailError("Hey!Email should not be empty")
       }
       if(password!=""){
        alert(password)
        setPasswordError("")
    }else{
        setPasswordError("Password should not be empty")
    }
   }
   }


//  const [textInputValue, settextInputValue] = useState('')
// const [value, setvalue] = useState('')

// const saveValue=()=>{
//     if(textInputValue){
//         AsyncStorage.setItem('Username',textInputValue);
//         settextInputValue('');
//         alert('Data Saved')
        

//     }else{
//         alert('Fill data')
//     }
// }

// const getValue=()=>{
//     AsyncStorage.getItem('Username')
//     .then((value)=>{
//         setvalue(value)
//         navigation.navigate('Data', {data: value})
//     })
// }
    
    return (
        <View >
           <ScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center',marginTop:20*vh}}>
                <Text style={styles.text}>Login</Text>
                <Text>{message}</Text>
                <TextInput
                    placeholder="USERNAME"
                    value={email}
                    onChangeText={(data)=> setEmail(data)}
                    onChange={()=>setEmailError("")}
                    style={styles.holder}
                    

                />
                <Text style={{color:"#48bab1"}}>{emailError}</Text>
                <TextInput 
                    placeholder="Password"
                    autoCapitalize="none"
                    value={password}
                    secureTextEntry
                    onChangeText={(data)=> setPassword(data)}
                    onChange={()=>setPasswordError("")}
                    style={styles.holder}

                />
                <Text style={{color:"#48bab1"}}>{passwordError}</Text>
                <TouchableOpacity
                 onPress={signin} 
                style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Login</Text>
     </TouchableOpacity>
     {/* <TouchableOpacity 
     onPress={getValue} 
    //  onPress={() => {
    //      console.log('click')
    //      console.log(value)
    //     navigation.navigate('Data',{data:value}) 
    //     getValue()
    //  } }
                style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Get Data</Text>
     </TouchableOpacity> */}
            <Text>Or</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Settings')}
            style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Signup</Text>

     </TouchableOpacity>
     {/* <Text>
         {value}
     </Text> */}

            
            </View>
        
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:35
        
    },
    holder:{
      borderWidth:2,
      borderColor:"#48bab1",
      width:200,
      marginTop:10
    }
})

export default HomeScreen
