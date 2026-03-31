import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';
import './stylesheets/App.css';

const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
    primaryColor: 'orange',
    colors: {
        dark: [
            '#DDE1E7',
            '#B7BEC8',
            '#8F98A5',
            '#6C7788',
            '#4D586A',
            '#394456',
            '#2B3443',
            '#1F2632',
            '#161C26',
            '#0E131C',
        ],
    },
});

const routes = [
    { path: '/', element: <Home />, name: 'Home' },
    { path: '/services', element: <Services />, name: 'Services' },

];

function App() {
    return (
        <MantineProvider theme={theme} forceColorScheme="dark">
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
