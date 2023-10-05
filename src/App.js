import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import CategoryMenu from "./components/CategoryMenu";
import Cards from "./components/Cards";
import Trending from "./components/Trending";
import Featured from "./components/Featured";
import SliderTwo from "./components/SliderTwo";
import NewProducts from "./components/NewProducts";
import BestSelling from './components/BestSelling'
import Collection from "./components/Collections";
import SliderThree from "./components/SliderThree";
import Discount from "./components/Discount";
import Assurance from "./components/Assurance";
import Subscribe from "./components/Subscribe";

function App() {
   return (
      <div className="App h-screen w-full">
         <Navbar></Navbar>
         <Slider></Slider>
         <CategoryMenu></CategoryMenu>
         <Cards></Cards>
         <Trending></Trending>
         <Featured></Featured>
         <SliderTwo></SliderTwo>
         <NewProducts></NewProducts>
         <BestSelling></BestSelling>
         <Collection></Collection>
         <SliderThree></SliderThree>
         <Discount></Discount>
         <Assurance></Assurance>
         <Subscribe></Subscribe>
         <Footer ></Footer>
      </div>
   );
}

export default App;
