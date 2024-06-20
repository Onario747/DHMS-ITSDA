import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Navigation from "../components/Navigation";
import Sponsors from "../components/Sponsors";
import SubFeatureHeadline1 from "../components/Sub-Feature-Headline1";
import SubFeature from "../components/SubFeature";
import SubFeautureCard from "../components/SubFeautureCard";

const Home = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Sponsors />
      <SubFeature />
      <SubFeatureHeadline1 />
      <SubFeautureCard />
      <KeyFeatures />
    </main>
  );
};

export default Home;
