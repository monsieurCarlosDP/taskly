import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { ShoppingListItem } from '../components/ShoppingListItem';
import { Link, useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>router.navigate('/idea')}>
        <Text>Go to Idea</Text>
      </TouchableOpacity>
      <Link href='/counter'>Go to counter</Link>
      <ShoppingListItem name='cafe'/>
      <ShoppingListItem name='azucar' isCompleted/>
      <ShoppingListItem name='cosas bonitas'/>
      <ShoppingListItem name='to eso' isCompleted/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
