import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import { BlogDescription, NotFound } from './containers/pageListAsync';
import Webdesign from './containers/web-design/Webdesign';
import PostListPage from './containers/PostListPage';
import MainLayout from './layout/MainLayout';
import Homepage from './containers/Home';

// Redux store setup
const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Route with Nested Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Homepage />} />
            <Route path="/:blogId" element={<BlogDescription />} />
            <Route path="web-design" element={<Webdesign />} />
            <Route path="development" element={<NotFound />} />
            <Route path="seo" element={<NotFound />} />
            <Route path="marketing" element={<NotFound />} />
            <Route path="posts" element={<PostListPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </Provider>
  );
}

export default App;
