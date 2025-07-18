import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import './stylesheets/App.css';

const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
});

const routes = [
    { path: '/', element: <Home />, name: 'Home' },

];

function App() {
    return (
        <MantineProvider theme={theme}>
            <Router>
                <Header />
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
                <Footer />
            </Router>
        </MantineProvider>
    );
}

export default App;
