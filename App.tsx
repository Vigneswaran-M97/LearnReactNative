import {SafeAreaView, ScrollView} from 'react-native';
import Flatcards from './screen/FlatCard';
import ElevatedCards from './screen/ElevatedCard';
import FancyCard from './screen/FancyCard';
import BlogCard from './screen/BlogCard';
import ContactCard from './screen/ContactCard';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
        
        <BlogCard/>
        <ContactCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
