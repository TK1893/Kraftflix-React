/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

// Import statement to indicate that you need to bundle `./index.scss`
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
// Main component (will eventually use all the others)

const App = () => {
  return <MainView />;
};

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(<App />);
