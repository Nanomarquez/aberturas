import { Route, Routes } from "react-router-dom";
import Counter from './components/Counter'
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Counter/>} />
    </Routes>
    </>
  )
}

export default App