import Header from "./components/Header";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import "./styles.css";

function App() {
  return (
    <div className="app">

      <Header />
      <Stories />
      <Feed />
    </div>
  );
}

export default App;