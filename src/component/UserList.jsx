import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native-web";
import users from "../data/users";
import UserItem from "./UserItem";

const UserList = () => {
    return (
        <FlatList
            data={users}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: e }) => (
                <UserItem {... e}/>
            )}>
        </FlatList>
    )
}
const styles = StyleSheet.create({
    whiteFont: {
        color: 'white',
    },
});

export default UserList