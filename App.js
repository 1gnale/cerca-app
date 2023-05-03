import { StyleSheet, Text, View } from 'react-native';
import Main from './src/component/main';

export default function App() {
  return (
    <View style={styles.container}>
    <Main />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});

