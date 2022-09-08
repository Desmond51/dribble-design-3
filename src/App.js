import './App.css';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar'

function App() {
  return (
    <div className="App">
     <div class="container-lg">
    <div class="row gy-3 bg-success"> 
      <div class="col-sm-6 col-lg-7 bg-light mt-5 ms-5">
        <div >
        <LeftSidebar />
      
        </div>
      </div>
      <div class="col-sm-4 col-lg-4 bg-light ms-3">
        <div>
        <RightSidebar />
        
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App;
