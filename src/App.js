import { Navbar } from "./components/Navbar";
import { ProductListing } from "./components/ProductListing";
import { Sidebar } from "./components/Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="parent-div">
        <Sidebar />
        <ProductListing />
      </div>
    </div>
  );
}
