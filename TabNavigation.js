import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import { screen2Option, screen3Option, screen4Option } from './components/HeaderOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="home"
                tabBarOptions={{
                    activeBackgroundColor: 'blue',
                    activeTintColor : 'red',
                    inactiveTintColor: 'red',
                    tabBarStyle: {
                        height: 0, // Adjust the height of the tab bar
                    },
                    labelStyle: {
                        fontSize: 15,
                        color:"#fff",
                        fontWeight:"bold",
                    },
                }}
            >
                <Tab.Screen name="Home" component={Screen1}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={"#fff"} size={15} />
                        ),
                    }} 
                />
                <Tab.Screen name="login" component={Screen2}
                    options={screen2Option}
                />

                <Tab.Screen name="bodyDataForm" component={Screen3}
                    options={screen3Option}
                />

                <Tab.Screen name="showPlan" component={Screen4}
                    options={screen4Option}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default TabNavigation;
