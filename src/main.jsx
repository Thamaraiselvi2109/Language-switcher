import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/i18n.js'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
