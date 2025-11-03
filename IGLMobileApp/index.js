/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { TextDecoder, TextEncoder } from 'text-encoding-utf-8';
import 'react-native-get-random-values';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

AppRegistry.registerComponent(appName, () => App);
