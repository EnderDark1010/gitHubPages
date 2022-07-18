import "./App.css";
import { Navbar } from "./Components/Organism/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "./data";
import { StartPage } from "./Components/Pages/StartPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/githubpages/" element={<Navbar />}>
            <Route index element={<StartPage />} />
            {pages.map((page) => {
              return <Route path={page.endpoint} element={page.pagesObject} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
