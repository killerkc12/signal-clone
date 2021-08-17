import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { Button } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const image = "https://w7.pngwing.com/pngs/104/119/png-transparent-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo-silhouette.png"

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle : "Back to Login",
        })
    },[navigation])

    const Register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || image
            })
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom: 50}} >
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Enter Full Name" autoFocus type="text" value={name} onChangeText={text=> setName(text)} />
                <Input placeholder="Enter Email"  type="email" value={email} onChangeText={text=> setEmail(text)} />
                <Input placeholder="Enter Password"  type="password" secureTextEntry value={password} onChangeText={text=> setPassword(text)} />
                <Input placeholder="Enter Profile Image (Optional)"  type="text" value={imageUrl} onChangeText={text=> setImageUrl(text)} onSubmitEditing={Register} />
            </View>
            <Button containerStyle={styles.button} raised title="Register" onPress={Register} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
