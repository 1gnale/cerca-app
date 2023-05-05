import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native-web";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoriesList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: e }) => (
                <RepositoryItem {... e}/>
            )}>
        </FlatList>
    )
}
const styles = StyleSheet.create({
    whiteFont: {
        color: 'white',
    },
});

export default RepositoriesList