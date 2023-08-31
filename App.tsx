import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { CameraProvider } from './contexts/CameraContext';
import AuthProvider from './contexts/Auth/AuthContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Config from 'react-native-config';

const client = new ApolloClient({
  uri: 'https://aioits-backend-q6ihv4us2q-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  console.log('Config.API_URL', Config.API_URL);

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <CameraProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </CameraProvider>
        </AuthProvider>
      </ApolloProvider>
    </TailwindProvider>
  );
}

// network defense general
// sertifikasi
// kompetisi
// pekerjaan
// research
