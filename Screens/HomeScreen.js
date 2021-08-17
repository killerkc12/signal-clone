import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../Components/CustomListItem'
import { auth } from '../firebase'

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            // title: "Signal",
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTitleStyle: {
                color: "black"
            },
            headerTintColor: "black",
            headerLeft: () =>{
                <View style={{marginLeft: 20}}>
                    <Avatar source={{uri: auth?.currentUser?.photoURL}} />
                </View>
            }
        })
    },[])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
