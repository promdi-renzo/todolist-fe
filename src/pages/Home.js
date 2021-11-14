import MainButtons from "../components/MainButtons";
import Footer from "../components/Footer";

function Home({state}) {

  

  return (
    <div style={homeStyle}>
      <MainButtons/>
      <Footer state={state}/>
    </div>
  );
}

const homeStyle = {
  height: "100vh",
  width: "100%",
};
export default Home;
