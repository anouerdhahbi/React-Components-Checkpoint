import logo from './logo.svg';
import './App.css';
import Photo from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName"
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <Photo/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
