import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
			screenOptions={{
				
			}}>
			<Stack.Screen name="index" options={{
				headerTitle: "Usuário",
				headerLeft: () => (
					<Ionicons
						name='person'
						size={30}
						color="#fff"
						style={styles.icon}
						onPress={() => {
							// Adicione o manipulador onPress do seu ícone aqui
						}}
					/>
				),
				headerStyle: styles.header,
			}} />
			<Stack.Screen name="home" options={{headerShown: false}} />
			<Stack.Screen name="components/editTask" options={{headerShown: false}} />
		</Stack>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    marginTop: 11
  },
  header: {
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});