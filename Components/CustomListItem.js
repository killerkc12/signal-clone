import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {

    const image = "https://w7.pngwing.com/pngs/104/119/png-transparent-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo-silhouette.png"

    return (
        <ListItem>
            <Avatar 
                rounded
                source={{
                    uri: image
                    // chatMessages?.[0].photoURL || 
                }}
                />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800"}}>
                    Youtube Chat 
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines ={1} ellipsizeMode="tail">
                    This is test subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
