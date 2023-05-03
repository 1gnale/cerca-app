
import { View, Text, StyleSheet } from "react-native";

const UserItem = (e) => (
    <View key={e.id} style={styles.container}>
        <Text style={styles.whiteFont}>Full Name: {e.first_name + " " + e.last_name}</Text>
        <Text style={styles.whiteFont}>email: {e.email}</Text>
        <Text style={styles.whiteFont}>Gender: {e.gender}</Text>
        <Text style={styles.whiteFont}>IP: {e.ip_address}</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    whiteFont: {
        color: 'white',
    },
});

export default UserItem