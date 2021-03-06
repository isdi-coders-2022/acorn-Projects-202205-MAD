import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.css';
import { Home } from './pages/home';

function App() {
    const PlaylistPage = React.lazy(() => import('./pages/personalPlaylist'));
    const NewMatchPage = React.lazy(() => import('./pages/newMatch'));
    const DetailsPage = React.lazy(() => import('./pages/details'));
    const options = [
        { path: '', label: 'Home', page: <Home></Home> },
        { path: '/home', label: 'Home', page: <Home></Home> },
        {
            path: '/playlist',
            label: 'Playlist',
            page: <PlaylistPage></PlaylistPage>,
        },
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
        { path: '*', label: '', page: <Navigate replace to="" /> },
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
