import Friends from './Friends'
import Team from './Team'
import Counter from './counter'
import Users from './users'


export default function App() {
  return (
    <div>
      <h3>Today is module 39</h3>
      {/* <PlayWithEvent /> */}
      {/* <Counter></Counter> */}
      {/* <Team /> */}
      <abc></abc>
      {/* <Users /> */}
      <Friends />
    </div>
  )

}


function PlayWithEvent() {

  function HandleClick() {
    alert('button-01 clicked')
  }
  function HandleClick2() {
    alert('button 2 clicked')
  }
  function addToFive(num) {
    alert(num + 5)
  }

  return (
    <div className='myclass'>
      <h3>React core concepts</h3>

      <button onClick={HandleClick}>button-01</button>
      <button onClick={function () { alert('button-02 clicked') }}>button-02</button>

    </div>
  )
}

function abc(){
    return <h3>hello</h3>
}