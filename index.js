/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/component/App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

import {Settings} from 'react-native-fbsdk-next';
Settings.initializeSDK();

AppRegistry.registerComponent(appName, () => App);
