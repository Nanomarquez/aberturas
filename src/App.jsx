import { Route, Routes } from "react-router-dom";
import Counter from './components/Counter'
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ejemplo" element={<Counter/>} />
    </Routes>
    </>
  )
}

export default App