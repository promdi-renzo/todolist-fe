import MainButtons from "../components/MainButtons";
import Footer from "../components/Footer";
import Page404 from "./NullPages/Page404";
function Home({state, hasErrror}) {


  return !hasErrror ? (
    <div style={homeStyle}>
      <MainButtons/>
      <Footer state={state}/>
    </div>
  )
  :
    <Page404/>
}

const homeStyle = {
  height: "100vh",
  width: "100%",
};
export default Home;
