import './App.scss';
import { Header }from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Content } from './components/Content';
<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
