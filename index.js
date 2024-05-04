import 'react-native-gesture-handler';

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './src/reducer';
import { NavigationContainer } from '@react-navigation/native';

import Toast from "react-native-toast-notifications";

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// FontAwesome5.getStyledIconSet('solid').loadFont();

const store = configureStore({
    reducer : rootReducer
});

const ReduxApp = () => {
    return (
        <ToastProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <App />
                    <Toast ref={(ref) => global['toast'] = ref} />
                </NavigationContainer>
            </Provider>
        </ToastProvider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxApp);
