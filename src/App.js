import AddItem from "./components/AddItem";
import Filter from "./components/Filter";
import Header from "./components/Header";
import View from "./components/View";

function App() {
  return (
    <>
      <Header/>
      <div className="relative">
        <AddItem/>
        <Filter/>
        <View/>
      </div>
    </>
  );
}

export default App;
