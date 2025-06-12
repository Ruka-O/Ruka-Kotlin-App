import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Box, UIProvider} from "@yamada-ui/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UIProvider>
            <Box bg="#FDFBF8" minH="100vh" textColor="#2e2e2e" fontFamily="Hannotate SC">
                <App/>
            </Box>
        </UIProvider>
    </StrictMode>,
)
