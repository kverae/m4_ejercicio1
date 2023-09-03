import './App.css';
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <PostList />
    </div>
  );
}

export default App;
