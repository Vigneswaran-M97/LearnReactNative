import {View, Text, SafeAreaView, useColorScheme, useWindowDimensions} from 'react-native';
import AppStyles from './Style/app';

const App = (): JSX.Element => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        AppStyles.container,
        isDarkMode ? AppStyles.blackBackgroundColor : AppStyles.whiteBackgroundColor,
      ]}>
      <Text style={isDarkMode ? AppStyles.whiteText : AppStyles.blackText}>
        Welcome
      </Text>
    </View>
  );
};

export default App;
