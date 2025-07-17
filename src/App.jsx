import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.jsx';

const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
});

const routes = [
    { path: '/', element: <Home />, name: 'Home' },
    { path: '/about', element: <About />, name: 'About' },
    { path: '/contact', element: <Contact />, name: 'Contact' },
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
