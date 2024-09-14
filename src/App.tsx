import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/SkillsPC";
import Profile from "./pages/ProfilePC";
import Contact from "./pages/ContactPC";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
