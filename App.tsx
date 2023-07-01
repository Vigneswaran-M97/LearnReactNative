import {SafeAreaView, ScrollView} from 'react-native';
import Flatcards from './screen/FlatCard';
import ElevatedCards from './screen/ElevatedCard';
import FancyCard from './screen/FancyCard';
import BlogCard from './screen/BlogCard';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
        {/* <BlogCard/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
