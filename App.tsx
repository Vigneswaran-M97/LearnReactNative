import {SafeAreaView, ScrollView} from 'react-native';
import Flatcards from './screen/FlatCard';
import ElevatedCards from './screen/ElevatedCard';
import FancyCard from './screen/FancyCard';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
