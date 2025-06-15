import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import AllProjects from "./pages/AllProjects"

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isDark={isDark} setIsDark={setIsDark} />}>
          <Route index element={<Home isDark={isDark} />} />
          <Route path="about" element={<About isDark={isDark} />} />
          <Route path="projects" element={<Projects isDark={isDark} />} />
          <Route path="all-projects" element={<AllProjects isDark={isDark} />} />
          <Route path="contact" element={<Contact isDark={isDark} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App