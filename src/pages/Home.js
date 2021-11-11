import MainButtons from "../components/MainButtons";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={homeStyle}>
      <MainButtons />
      <Footer />
    </div>
  );
}

const homeStyle = {
  height: "100vh",
  width: "100%",
};
export default Home;
