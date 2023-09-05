import {
  Header,
  Hero,
  About,
  Explore,
  GetStarted,
  New,
  Map,
  Insight,
  Feedback,
  Footer,
  Subscribe,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <header className="py-9">
        <Header />
      </header>
      <section className="py-20">
        <Hero />
      </section>
      <section className="py-20">
        <About />
      </section>
      <section className="py-20" id="explore">
        <Explore />
      </section>
      <section className="py-20">
        <GetStarted />
      </section>
      <section className="py-20">
        <New />
      </section>
      <section className="py-20">
        <Map />
      </section>
      <section className="py-20">
        <Insight />
      </section>
      <section className="py-20">
        <Feedback />
      </section>
      <section className="py-20">
        <Subscribe />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
