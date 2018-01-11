import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { StyleProvider, View, Text } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Routers from './routers';
import reducers from './reducers';
import MyToast from './components/MyToast';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = autoRehydrate()(createStoreWithMiddleware)(reducers);

persistStore(store, { storage: AsyncStorage });

class App extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <Routers />
            <MyToast />
          </View>
        </Provider>
      </StyleProvider>
    );
  }
}

export default App;