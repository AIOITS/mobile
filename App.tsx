import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import MyComponent from './components/MyComponent';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
}
