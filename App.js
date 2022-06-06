import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Screens/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Screens/HomePage";
import Profile from "./Screens/Profile";



export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b75000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
