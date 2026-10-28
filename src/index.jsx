import { createRoot } from 'react-dom/client';
import App from './App';
import { loadHeap } from './analytics';
import './style.css';

loadHeap(import.meta.env.VITE_HEAP_APP_ID);
createRoot(document.getElementById('root')).render(<App />);
