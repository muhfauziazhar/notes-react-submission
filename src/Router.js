import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import AddNewNote from './pages/AddNewNote';
import NoteDetail from './pages/NoteDetail';
import NotFound from './pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Layout>
                            <MainPage
                                title={'Catatan Aktif'}
                                isArchived={false}
                            />
                        </Layout>
                    }
                />
                <Route
                    path='/archives'
                    element={
                        <Layout>
                            <MainPage
                                title={'Catatan Arsip'}
                                isArchived={true}
                            />
                        </Layout>
                    }
                />
                <Route
                    path='/notes/new'
                    element={
                        <Layout>
                            <AddNewNote />
                        </Layout>
                    }
                />
                <Route
                    path='/notes/:id'
                    element={
                        <Layout>
                            <NoteDetail />
                        </Layout>
                    }
                />
                <Route
                    path='*'
                    element={
                        <Layout>
                            <NotFound />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
