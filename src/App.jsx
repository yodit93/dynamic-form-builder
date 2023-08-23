import CreateForm from "./components/CreateForm"
import DynamicFormBuilder from "./components/DynamicFormBuilder"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/form-builder" element={<DynamicFormBuilder />} />
      </Routes>
    </Router> 
  )
}

export default App
