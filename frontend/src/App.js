import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/layout/header/Header'
import Courses from './components/courses/Courses'
import Footer from "./components/layout/footer/Footer"
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'
import Contact from './components/contact/Contact'
import Request from './components/request/Request'
import About from './components/about/About'
import Subscribe from './components/payment/Subscribe'
import NotFound from './components/layout/NotFound'
import PaymentSuccess from './components/payment/PaymentSuccess'
import PaymentFail from './components/payment/PaymentFail'
import CoursePage from './components/coursePage/CoursePage'
import Profile from './components/profile/Profile'
import UpdateProfile from './components/profile/UpdateProfile'
import ChangePassword from './components/profile/ChangePassword'
import Dashboard from './components/admin/Dashboard/Dashboard'
import Users from './components/admin/Dashboard/Users/Users'
import CreateCourse from './components/admin/Dashboard/createCourse/CreateCourse'
import AdminCouses from './components/admin/Dashboard/AdminCourses/AdminCouses'
import { useDispatch, useSelector } from 'react-redux'
import toast, {Toaster} from "react-hot-toast" 
import { getMyProfile } from './redux/actions/user'
import {ProtectedRoute} from "protected-route-react"
import Loader from './components/layout/loader/Loader'
import Protected from './components/Protected'

const App = () => {

 const {isAuthenticated,user,message,error,loading} = useSelector(state=>state.user)
 const dispatch = useDispatch();



 useEffect(() => {
  if(error){
     toast.error(error)
     dispatch({type:'clearError'})
  }  
 
  if(message){
    toast.success(message)
    dispatch({type:'clearMessage'})
  }
  
 }, [dispatch,message,error])
 

 useEffect(() => {
    dispatch(getMyProfile())
 }, [dispatch])
 

  return ( 
     <BrowserRouter>
           {loading  ? <Loader/>: <>

           <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/courses' element={<Courses/>}/>
              <Route path='/course/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><CoursePage user={user} /></ProtectedRoute>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/request' element={<Request/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><Login/></ProtectedRoute>}/>
              <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><Register/></ProtectedRoute>}/>
              <Route path='/forgotpassword' element={<ForgotPassword/>}/>
              <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated}><ResetPassword/></ProtectedRoute>}/>

              <Route path='/subscribe' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Subscribe user={user} /></ProtectedRoute>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
              <Route path='/paymentfail' element={<PaymentFail/>}/>

              <Route path="/profile" element={<ProtectedRoute  isAuthenticated={isAuthenticated}><Profile user={user} /></ProtectedRoute>}/>
              <Route path="/changepassword" element={<ChangePassword/>}/>
              <Route path="/updateprofile" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><UpdateProfile user={user} /></ProtectedRoute>}/>
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdminRoute={true} isAdmin={user && user.role==='admin'} ><Dashboard/></ProtectedRoute>}/>
              <Route path="/admin/createcourse" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdminRoute={true} isAdmin={user && user.role==='admin'} ><CreateCourse/></ProtectedRoute>}/>
              <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdminRoute={true} isAdmin={user && user.role==='admin'} ><Users/></ProtectedRoute>}/>
              <Route path="/admin/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdminRoute={true} isAdmin={user && user.role==='admin'} ><AdminCouses/></ProtectedRoute>}/>
            

             


          </Routes>
          <Footer/>
          <Toaster/>

          </>}
     </BrowserRouter>  
  )
}


export default App




