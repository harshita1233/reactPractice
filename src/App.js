import BadgeComponent from './Container/BadgeComponent';
import ControlForm from './Container/ControlForm';
import CharacterCounter from './Container/CharacterCounter';
import EmailSignUp from './Container/EmailSignUp';
import './App.css';

function App() {
  return (
    <div className="App">
     <BadgeComponent/><hr/>
     <ControlForm/><hr/>
     <CharacterCounter /><hr/>
     <EmailSignUp/>
    </div>
  );
}

export default App;
