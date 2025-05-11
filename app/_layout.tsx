import { Stack,Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from "../theme";

export default function Layout() {
    return (
     /*    <Stack>
            <Stack.Screen name="index" options={{title:'Compra'}}/>
            <Stack.Screen name="counter" options={{title:'Counter', presentation:'modal'}}/>
            <Stack.Screen name="idea" options={{title:'Idea', presentation: 'modal', animation: 'simple_push'}}/>
        </Stack> */
        <Tabs
            screenOptions={{tabBarActiveTintColor: theme.colorMagenta}}
        >
            <Tabs.Screen name="index" options={{title:'Compra', 
                tabBarIcon:({color, size})=>{return <Entypo name="home" size={size} color={color} />}}}/>
            <Tabs.Screen name="counter" options={{title:'Counter', headerShown: false}}/>
            <Tabs.Screen name="idea" options={{title:'Idea'}}/>
        </Tabs>
    )
}