/* The following line can be included in a src/App.scss */
import { Container } from 'react-bootstrap';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import './index.scss';

// Import statement to indicate that you need to bundle `./index.scss`
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';

const App = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(<App />);
