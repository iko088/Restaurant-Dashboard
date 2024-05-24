import "./App.css";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";

function App() {

  
  return (
    <>
  <div className="container overflow-hidden">

    {/* SideBar  */}
    <div className="flex">
    <div className="w-1/5">  
        <SideBar/>
    </div>
    <div className="w-4/5 bg-[#f3f2f7]">  
        <MainContent/>
    </div>
    </div>


  </div>


    </>
  );
}

export default App;
