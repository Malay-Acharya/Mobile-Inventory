import Filter from "./components/Filter";
import Header from "./components/Header";
import View from "./components/View";

function App() {
  return (
    <>
      <Header/>
      <div className="relative">
        <Filter/>
        <View/>
      </div>
    </>
  );
}

export default App;
