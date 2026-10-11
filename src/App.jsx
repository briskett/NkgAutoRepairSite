import { createTheme, MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Header from './components/Header.jsx';
import RouteHead from './components/RouteHead.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import LiftRental from './pages/LiftRental.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
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

// The router itself is provided by the entry point: BrowserRouter in main.jsx,
// StaticRouter in entry-server.jsx when pages are prerendered at build time.
function App() {
    return (
        <MantineProvider theme={theme} forceColorScheme="dark">
            <RouteHead />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/lift-rental" element={<LiftRental />} />
                <Route path="/es" element={<Home />} />
                <Route path="/es/servicios" element={<Services />} />
                <Route path="/es/servicios/:slug" element={<ServiceDetail />} />
                <Route path="/es/renta-de-elevador" element={<LiftRental />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <MobileCallBar />
        </MantineProvider>
    );
}

export default App;
