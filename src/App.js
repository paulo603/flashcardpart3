import logo from './logo.svg';
import './App.css';

import Header from './components/header/index.jsx';
import Card from './components/card/index.jsx';
import CoursesPage from './pages/courses/index.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <CoursesPage />
    </div>
  );
}

export default App;
