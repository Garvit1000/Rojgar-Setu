import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import AddNewGig from './components/AddNewGig/AddNewGig'
import Home from './components/Home/Home';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Profile from './components/ProfilePage/Profile';
import ResumeEditor from './Pages/Resume/ResumeEditor';
import JobSearch from './components/JobSearch/JobSearch';
import AuthProvider from './components/AuthContext/AuthContext';
const App=() =>{
  return (
    <>
    <div className="App">
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-gigs" element={<AddNewGig />} />
        <Route path='/edit-profile' element= {<ProfilePage />} />
        <Route path='/profile' element ={<Profile />} />
        <Route path='/resume-editor' element ={<ResumeEditor />} />
        <Route path ='/jobs' element={<JobSearch />} />
      </Routes>
      </AuthProvider>
    </div>
    <Footer/>
    </>
  );
}
export default App
