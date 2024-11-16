// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
import Navbar from './components/Navbar';
register();

const App = () => {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App