import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import MainPage from '../pages/MainPage';
import AddNewNote from '../pages/AddNewNote';
import NoteDetail from '../pages/NoteDetail';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import { GlobalProvider } from '../GlobalContext';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <PrivateRoute>
                                <MainPage isArchived={false} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/archives'
                        element={
                            <PrivateRoute>
                                <MainPage isArchived={true} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/notes/new'
                        element={
                            <PrivateRoute>
                                <AddNewNote />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/notes/:id'
                        element={
                            <PrivateRoute>
                                <NoteDetail />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/auth/login'
                        element={
                            <Layout>
                                <Login />
                            </Layout>
                        }
                    />
                    <Route
                        path='/auth/register'
                        element={
                            <Layout>
                                <Register />
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
            </GlobalProvider>
        </BrowserRouter>
    );
};

export default Router;
