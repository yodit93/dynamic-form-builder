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
        <Route path="/dynamic-form-builder/" element={<CreateForm />} />
        <Route path="/dynamic-form-builder/my-form" element={<MyForm />} />
        <Route path="/dynamic-form-builder/form-builder" element={<DynamicFormBuilder />} />
      </Routes>
    </Router> 
  )
}

export default App
