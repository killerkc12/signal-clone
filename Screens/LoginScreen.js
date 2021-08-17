import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Image} from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(authUser =>{
            console.log(authUser)
            if(authUser){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    },[])

    const SignIn = {

    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://theme.zdassets.com/theme_assets/841909/92950fb3c1be711b8debb7b89412cb17a5d95f0c.png"
            }}
            style={{width: 200, height: 200}} 
            />
            <View style={styles.inputContainer} >
                <Input placeholder="Enter Email" autoFocus type="email" value={email} onChangeText={text=> setEmail(text)} />
                <Input placeholder="Enter Password" secureTextEntry type="password" value={password} onChangeText={text=> setPassword(text)} />
            </View>

            <Button containerStyle={styles.button} onPress={SignIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" onPress={()=> navigation.navigate("Register")} title="Register" />
            {/* <View style={{height:100}}></View> */}
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: "center",
        padding:10 ,
        backgroundColor: "white"
    },
    inputContainer:{
        width: 300
    },
    button:{
        width:200,
        marginTop: 10,
    }
    
})