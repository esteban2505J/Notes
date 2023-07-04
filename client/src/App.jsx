import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home page </h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>task page </h1>} />
        <Route path="/add-task" element={<h1>task page </h1>} />
        <Route path="/tasks/:id" element={<h1>update task</h1>} />
        <Route path="/profile" element={<h1>profile page </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
