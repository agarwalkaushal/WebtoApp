import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from "./AppNavigator";
import Home from './src/Home';

AppRegistry.registerComponent(appName, () => AppNavigator);
