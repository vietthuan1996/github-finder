import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className='flex flex-col justify-between h-screen'>
            <NavBar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/notfound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
