import react from 'react';
import Navbar from './navbar'
import Header from './header'
import AboutMe from './aboutMe';
import InstagramSection from './InstagramSection';
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <InstagramSection />
    </div>

  )
}

export default App;