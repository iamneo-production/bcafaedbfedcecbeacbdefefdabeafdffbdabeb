import { filterOdd, filterEven, generateRandomList } from './functions/filterOddEven';
import './App.css';
function App() {
  const randomList = generateRandomList();
  const oddList = filterOdd(...randomList).join(',');
  const evenList = filterEven(...randomList).join(',');

  return (
    <div>
      <h1><u>FILTER ODD EVEN</u></h1>
      <h2 id="d1">Random List: {randomList.join(', ')}</h2>
      <h2 id="d2">Odd List: {oddList}</h2>
      <h2 id="d3">Even List: {evenList}</h2>
    </div>
  );
}
export default App;