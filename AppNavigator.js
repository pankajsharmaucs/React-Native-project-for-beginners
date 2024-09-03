import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import { screen2Option, screen3Option, screen4Option } from './components/HeaderOptions';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{  
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      // inputRange: [0, 0.5, 1], // Faster animation
                      // inputRange: [0, 1], //normal
                      inputRange: [0, 0.25, 1], // Slower animation
                      outputRange: [layouts.screen.width, 0,0],
                    }),
                  },
                  {
                    translateX: next
                      ? next.progress.interpolate({
                        // inputRange: [0, 0.5, 1], // Faster animation
                        // inputRange: [0, 1], //normal
                        inputRange: [0, 0.25, 1], // Slower animation
                          outputRange: [0,0, -layouts.screen.width],
                        })
                      : 0,
                  },
                ],
              },
            };
          },
        }}

      >
        <Stack.Screen name="home" component={Screen1}
            options={{
              headerShown: false,
              
            }} />
        <Stack.Screen name="login" component={Screen2}
          options={screen2Option}
        />

        <Stack.Screen name="bodyDataForm" component={Screen3}
          options={screen3Option}
        />

        <Stack.Screen name="showPlan" component={Screen4}
          options={screen4Option}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
