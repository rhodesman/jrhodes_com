import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// FontAwesome icons (free set covers github, linkedin, envelope, etc.)
import '@fortawesome/fontawesome-free/css/all.min.css';

// App styles — our own design system, no Bootstrap dependency
import './styles/main.scss';

import { App } from './App';
import { initAnalytics } from './lib/analytics';

// Load Microsoft Clarity (no-op until a project ID is configured in analytics.ts).
initAnalytics();

const container = document.getElementById('root');
if (!container) {
  throw new Error('#root element not found');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
