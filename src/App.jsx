import './App.css'
import Counter from './counter'


function App() {

  function HandleClick() {
    alert('button clicked')
  }
  function HandleClick2() {
    alert('button 2 clicked')
  }
  function addToFive(num) {
    alert(num + 5)
  }

  return (
    <div>
      <h3>React core concepts</h3>

      <Counter></Counter>

      <button onClick={HandleClick}>Click me</button>
      <button onClick={HandleClick2}>Click me 2</button>
      <button onClick={() => { alert('button-3 clicked') }}>Click me 3</button>
      <button onClick={() => addToFive(4)}>Click me 4</button>
    </div>
  )
}

export default App
