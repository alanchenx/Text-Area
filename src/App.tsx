import "./App.css";
import LeftContent from "./Component/LeftContent";
import RightContent from "./Component/RightContent";

function App() {
  return (
    <>
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
    </>
  );
}

export default App;
