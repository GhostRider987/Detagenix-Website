import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import { useEffect } from "react";
const Projectpage = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <PortfolioSection />
    </>
  );
};

export default Projectpage;
