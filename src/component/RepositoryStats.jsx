import { View } from "react-native"
import StyledText from "./StyledText"


const parseThousands = (value) => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}K`:
    String(value)
}

const RepositoryStats = (e) => {
    return(
    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <View>
            <StyledText align="center" fontWeight="bold">Stars:</StyledText>
            <StyledText align="center">{parseThousands(e.stargazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align="center" fontWeight="bold">Forks:</StyledText>
            <StyledText align="center">{parseThousands(e.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align="center" fontWeight="bold">Review:</StyledText>
            <StyledText align="center">{parseThousands(e.reviewCount)}</StyledText>
        </View>
        <View>
            <StyledText align="center" fontWeight="bold">Rating:</StyledText>
            <StyledText align="center">{parseThousands(e.ratingAverage)}</StyledText>
        </View>
    </View>
    )
}

export default RepositoryStats