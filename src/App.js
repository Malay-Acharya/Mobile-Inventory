import AddItem from "./components/AddItem";
import AddItemForm from "./components/AddItemForm";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Main from "./components/Main";
import View from "./components/View";
import { useSelector } from "react-redux/es/exports";

function App() {
  const val = useSelector(state => state.changestate);
  return (
    <>
      <Header/>
      <div className="relative flex h-screen">
        <AddItem/>
        <Filter/>
        <View/>
        <div className="mt-20 w-9/12 flex-col">
          {val === true?<AddItemForm/>:(<></>)}
          <Main/>
        </div>
      </div>
    </>
  );
}

export default App;
