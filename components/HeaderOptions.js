import { Button } from 'react-native';

export const screen2Option = ({ navigation }) => {
    return (
        {
            // animationEnabled: true,
            animationTypeForReplace: 'push',
            headerTitle: "Choose Your Goal",
            headerTitleStyle: {
                fontSize: 15,
                fontWeight: "bold",
                color: "#444444",
            },
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('home')}
                    title="Home"
                />
            ),
            headerRightContainerStyle: {
                marginRight: 10, // Adjust spacing
            },
            headerStyle: {
                backgroundColor: '#fff', // Set your header color
                height: 50,
                padding: 10,
            },
            
        }
    )

}


export const screen3Option = ({ navigation }) => {
    return (
        {
            // animationEnabled: true,
            animationTypeForReplace: 'push',
            headerTitle: "Fill Weight & Height",
            headerTitleStyle: {
                fontSize: 15,
                fontWeight: "bold",
                color: "#444444",
            },
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('home')}
                    title="Home"
                />
            ),
            headerRightContainerStyle: {
                marginRight: 10, // Adjust spacing
            },
            headerStyle: {
                backgroundColor: '#fff', // Set your header color
                height: 50,
                padding: 10,
            }
        }
    )

}

export const screen4Option = ({navigation}) => {
    return (
        {
            // animationEnabled: true,
            animationTypeForReplace: 'push',
            headerTitle: "Diet Plan",
            headerTitleStyle: {
                fontSize: 15,
                fontWeight: "bold",
                color: "#444444",
            },
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('home')}
                    title="Home"
                />
            ),
            headerRightContainerStyle: {
                marginRight: 10, // Adjust spacing
            },
            headerStyle: {
                backgroundColor: '#fff', // Set your header color
                height: 50,
                padding: 10,
            },
        }
    )
}


