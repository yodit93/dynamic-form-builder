import CreateForm from "./components/Createform"
import DynamicFormBuilder from "./components/DynamicFormBuilder"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import MyForm from "./components/MyForm"
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/my-form" element={<MyForm />} />
        <Route path="/form-builder" element={<DynamicFormBuilder />} />
      </Routes>
    </Router> 
  )
}

export default App
