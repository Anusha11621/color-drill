
import './App.css';
import Color from './components/Color'
import data from './colors.json'
function App() {
  return (
        <div >
           <Color info={data}/>
        </div>
  );
}


export default App;
