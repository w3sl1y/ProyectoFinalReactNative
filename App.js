import React from 'react';
import { FavouriteContext, FavouriteContextProvider } from './src/context/Favourite.context';
import { ProductContextProvider } from './src/context/Product.context';
import { AppNavigation } from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return(
    <Provider store={store}>
    <FavouriteContextProvider>
      <ProductContextProvider>
        <AppNavigation />
      </ProductContextProvider>
    </FavouriteContextProvider>
    </Provider>
  )
}

export default App