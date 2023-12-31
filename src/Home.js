import Header from "./components/Header";
import HomeCover from "./components/HomeCover";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <HomeCover />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
