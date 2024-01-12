import "./App.css";
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      It works
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
