import { SafeAreaView, Text, View } from 'react-native';
import WordBoard from './src/components/WordBoard';
import KeyBoard from './src/components/KeyBoard';

export default function App() {
  return (
    <SafeAreaView className='bg-gray-200 flex-1 relative'>
      <WordBoard />
      <KeyBoard />
    </SafeAreaView>
  );
}
