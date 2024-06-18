import './App.css';
import data from './components/data.js'
import Travel from './components/travel.js'

const travelElement = data.map(function(item){
  return (
    <div>
      <Travel
      key={item.id}
      {...item}
      />
      {/* <hr className='line'/> */}
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <h3 className='header'>My Travel Log</h3>
      <section className="list">
        {travelElement}
        </section>
    </div>
  );
}

export default App;
