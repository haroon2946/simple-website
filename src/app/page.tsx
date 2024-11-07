import Footer from "./components/footer";
import Header from "./components/header";


const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="main-content">
        <h2>Welcome to My Website</h2>
        <p>This is the home page.</p>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
