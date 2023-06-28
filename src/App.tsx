import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Body/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
