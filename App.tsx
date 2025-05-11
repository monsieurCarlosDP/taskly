import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity, Pressable } from 'react-native';
import { theme } from './theme';

export default function App() {

  const handleDelete = ()=>{
    Alert.alert("Tas seguro, hermoso?", "La puedes liar...", [{
      text: "poj caro",
      onPress: () => console.log('sep'),
      style: 'destructive'
    },
    {
      text: "mmmeh",
      onPress: ()=> console.log('mmmmeh'),
      style: 'default'
    }
  ]);
  }

  return (
    <View style={styles.container}>

      
      <View style={styles.textContainer}>
        <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  textContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomColor: '#ff007d',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 6,
    borderRadius: 6
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1
  }
});
