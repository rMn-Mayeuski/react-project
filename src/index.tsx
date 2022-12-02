import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { BurgerMenuProvider } from './provider/BurgerMenuProvider';
import { ScreenWidthProvider } from './provider/ScreenWidthProvider';
import { store } from './store/reducer/RootReducer';
import './firebase';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<BurgerMenuProvider>
			<ScreenWidthProvider>
				<Provider store={store}>
					<App />

				</Provider>
			</ScreenWidthProvider>
		</BurgerMenuProvider>
	</BrowserRouter>
	// </React.StrictMode>
);
