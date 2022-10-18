import "./App.css";
import Counter from "./Components/Counter"; // Functional component
import Search from "./Components/Search"; // React Component
import Toggle from "./Components/Toggle"; // React Pure Component

function App() {
  const title = "Hello World";
  const menu = [
    {
      id: "1",
      name: "All",
      selected: true,
    },
    {
      id: "2",
      name: "Documentary",
      selected: false,
    },
    {
      id: "3",
      name: "Comedy",
      selected: false,
    },
    {
      id: "4",
      name: "Horror",
      selected: false,
    },
    {
      id: "5",
      name: "crime",
      selected: false,
    },
  ];

  return (
    <div className="App">
      <h2>{title}</h2>
      <Counter />
      <Search />
      <Toggle menu={menu} />
    </div>
  );
}

export default App;
