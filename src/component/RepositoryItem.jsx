
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "./theme";

const RepositoryItemHeader = (e) => {
    <View>
        <StyledText fontSize="subheading" fontWeight="bold">{e.fullName}</StyledText>
        <StyledText >{e.description}</StyledText>
        <StyledText >{e.language}</StyledText>
    </View>
}

const RepositoryItem = (e) => (
    <View key={e.id} style={styles.container}>
        <RepositoryItemHeader {...e}/>
        <RepositoryStats {...e}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.textPrimary,
        backgroundColor: theme.colors.textSecundary,
        alignSelf: "flex-start",
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default RepositoryItem