import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './assets/theme';
import { store, persistor } from './util/redux/store';
import NotFoundPage from './NotFound/NotFoundPage';
import HomePage from './Home/HomePage';
import AdminDashboardPage from './AdminDashboard/AdminDashboardPage';
import ToxicTraitPage from './ToxicPeople/ToxicTraitPage';
import ToxicTraitIndividual from './ToxicPeople/ToxicTraitIndividual';


import {
  UnauthenticatedRoutesWrapper,
  ProtectedRoutesWrapper,
  DynamicRedirect,
  AdminRoutesWrapper,
} from './util/routes';
import VerifyAccountPage from './Authentication/VerifyAccountPage';
import RegisterPage from './Authentication/RegisterPage';
import LoginPage from './Authentication/LoginPage';
import EmailResetPasswordPage from './Authentication/EmailResetPasswordPage';
import ResetPasswordPage from './Authentication/ResetPasswordPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline>
                <Routes>
                  {/* Routes accessed only if user is not authenticated */}
                  <Route element={<UnauthenticatedRoutesWrapper />}>
                    <Route path="/toxic-traits" element={<ToxicTraitPage />} />
                    <Route path="/toxicTraitIndividual" element={<ToxicTraitIndividual />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                      path="/verify-account/:token"
                      element={<VerifyAccountPage />}
                    />
                    <Route path="/ToxicTraitIndividual/:firstName/:pictureUrl" element={<ToxicTraitIndividual />} />


                    <Route
                      path="/email-reset"
                      element={<EmailResetPasswordPage />}
                    />
                    <Route
                      path="/reset-password/:token"
                      element={<ResetPasswordPage />}
                    />
                  </Route>
                  {/* Routes accessed only if user is authenticated */}
                  <Route element={<ProtectedRoutesWrapper />}>
                    <Route path="/home" element={<HomePage />} />
                  </Route>
                  <Route element={<AdminRoutesWrapper />}>
                    <Route path="/users" element={<AdminDashboardPage />} />
                  </Route>

                  {/* Route which redirects to a different page depending on if the user is an authenticated or not by utilizing the DynamicRedirect component */}
                  <Route
                    path="/"
                    element={
                      <DynamicRedirect unAuthPath="/login" authPath="/home" />
                    }
                  />

                  {/* Route which is accessed if no other route is matched */}
                </Routes>
              </CssBaseline>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
