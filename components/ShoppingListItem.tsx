import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name: string,
    isCompleted?: boolean
}

export function ShoppingListItem({name,isCompleted}: Props) {

      const handleDelete = ()=>{
        Alert.alert(`¿Seguro que quieres borrar ${name}?`, "La puedes liar...", [{
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
          <View style={[styles.textContainer, isCompleted? styles.completedContainer: undefined]}>
            <Text style={[styles.text, isCompleted?styles.textCompleted: undefined]}>{name}</Text>
            <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
                <AntDesign style={[isCompleted? styles.completedButtonText : styles.buttonText ]} name="closecircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )
}
const styles = StyleSheet.create({
  textContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomColor: theme.colorMagenta,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey
  },
  completedButton: {
    color: theme.colorGrey
  },
  completedButtonText: {
    color: theme.colorGrey
  },
  text: {
    fontSize: 12
  },
  textCompleted: {
    fontSize: 12,
    textDecorationLine: 'line-through'
  },
  buttonText: {
    color: theme.colorRed,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1
  }
});