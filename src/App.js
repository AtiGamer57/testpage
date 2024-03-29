import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Trending from './Trending';
import ApiImages from './ApiImages';
import Greeting from './Greeting';
import Footer from './Footer';

function App() {
  return (
    <div className=' w-10/12 absolute left-1/2 -translate-x-1/2 font-Poppins'>
      <Navbar />
      <Greeting />
      <ApiImages />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
