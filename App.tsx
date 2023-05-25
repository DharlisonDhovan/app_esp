import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EspController from './src/pages/EspController';

export default function App() {
  return (
    <View style={styles.container}>
     <EspController/>
      <StatusBar style="light" backgroundColor='#39ff14' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
