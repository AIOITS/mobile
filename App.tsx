import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { CameraProvider } from './hooks/Camera/CameraContext';

export default function App() {
  const tw = useTailwind();

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <CameraProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </CameraProvider>
    </TailwindProvider>
  );
}
