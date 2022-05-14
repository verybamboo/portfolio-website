import "./App.css";
import Projects from "./components/Projects";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import NavigationSideBar from "./components/NavigationSideBar";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="full-div">
      <Topbar />
      <Home />
      <Sidebar />
      <NavigationSideBar />
      <Skills />
      <Projects />
      <Profile />
      <Contact />
    </div>
  );
}

export default App;
