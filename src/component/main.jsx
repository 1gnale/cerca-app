import React from "react";
import Constants from "expo-constants"
import {Text, View} from "react-native"
import UserList from "./UserList";

const Main = () => {
    return (
        <View>
            <Text style={{marginTop: Constants.statusBarHeight, flexGrow: 1, color: "white"}}>Heistbook</Text>
            <UserList />
        </View>
    )
}

  
export default Main