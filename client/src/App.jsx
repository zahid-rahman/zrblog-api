import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from "./pages/home/HomePage"
import CreatePostPage from './pages/post/CreatePostPage'
import { changeSiteName } from './actions/index'
import LoginPage from './pages/home/LoginPage'
import SignUpPage from './pages/home/SignUpPage'
import PrivateRoute from './components/custom-routes/PrivateRoute'
import Dashboard from './components/user/Dashboard'
import PublicRoute from './components/custom-routes/PublicRoute'
import Logout from './components/user/Logout'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeSiteName('ZR blog'))
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>


          <Route path="/about" exact>
            <AboutPage />
          </Route>


          <Route path="/contact" exact>
            <ContactPage />
          </Route>

          <PublicRoute path="/login" exact component={LoginPage}>
          </PublicRoute>

          <PublicRoute path="/signup" exact component={SignUpPage}>
          </PublicRoute>

          <Route path="/post/create">
            <CreatePostPage></CreatePostPage>
          </Route>

          <PrivateRoute path="/dashboard" exact component={Dashboard}>
          </PrivateRoute>

          <PrivateRoute path="/logout" exact component={Logout} />
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
