import Footer from "../footer";
import Header from "../header";


const About: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="main-content">
        <h2>About Us</h2>
        <p>Learn more about our website and mission here.</p>
      </main>
      <Footer/>
    </>
  );
};

export default About;
