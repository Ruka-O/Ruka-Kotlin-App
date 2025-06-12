import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import StartPage from "./pages/StartPage.jsx";
import PalettePage from "./pages/PalettePage.jsx";
import PaintPage from "./pages/PaintPage.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/palette" element={<PalettePage/>}/>
                    <Route path="/paint" element={<PaintPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
