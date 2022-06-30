import AddItem from "./components/AddItem";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Main from "./components/Main";
import View from "./components/View";

function App() {
  return (
    <>
      <Header/>
      <div className="relative flex h-screen">
        <AddItem/>
        <Filter/>
        <View/>
        <Main/>
      </div>
    </>
  );
}

export default App;
