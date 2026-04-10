import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Third-party CSS (imported before our own styles so our SCSS can override).
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// App styles.
import './styles/main.scss';

import { App } from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('#root element not found');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
