
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import Header from './components/Header/Header';
import Routing from './routing/Routing';
import { faB, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Footer from './components/footer/Footer';
import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far)
