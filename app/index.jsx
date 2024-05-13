import { StyleSheet, Text, View } from "react-native";
import {gStyle} from './styles/global';

export default function App() {
  return (
    <View>
      <View>
        <Text className="text-xl" style={gStyle.text}>Hello World</Text>
        <Text style={styles.title}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    // fontSize: 64,
    // fontWeight: "bold",
    fontFamily: 'Aventa-Regular'
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
