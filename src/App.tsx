import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.css';
import { Home } from './pages/home';

function App() {
    const PlaylistPage = React.lazy(() => import('./pages/personalPlaylist'));
    const LoginPage = React.lazy(() => import('./pages/login'));
    const NewMatchPage = React.lazy(() => import('./pages/newMatch'));
    const DetailsPage = React.lazy(() => import('./pages/details'));
    const options = [
        { path: '/home', label: 'Home', page: <Home></Home> },
        {
            path: '/playlist',
            label: 'Playlist',
            page: <PlaylistPage></PlaylistPage>,
        },
        { path: '/login', label: 'Login', page: <LoginPage></LoginPage> },
        {
            path: '/newMatch',
            label: 'NewMatch',
            page: <NewMatchPage></NewMatchPage>,
        },
        {
            path: '/details/:id',
            label: 'Details',
            page: <DetailsPage></DetailsPage>,
        },
    ];
    return (
        <Layout>
            <React.Suspense>
                <Routes>
                    {options.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </React.Suspense>
        </Layout>
    );
}

export default App;
