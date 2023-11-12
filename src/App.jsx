import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {FAQs} from "./pages/FAQs";
import {Home} from "./pages/Home";
import {Layout} from "./layouts/Layout";
import {Contact} from "./pages/Contact";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="faqs" element={<FAQs/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App
