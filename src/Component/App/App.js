import Profile from '../Profile/Profile.js';
import pImg from '../../angela.png';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Ayoku Ghaffar" bio="Higher National Diploma in Mechanical Engineering" profession="web developer" imge={pImg} />
    </div>
    );
}

export default App;
