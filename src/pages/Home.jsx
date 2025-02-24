import { NewsletterBox } from "../components/layout/NewsletterBox";
import { Advert } from "../components/UI/Advert";
import { FeatureProduct } from "../components/UI/FeatureProduct";
import { HeroSection } from "../components/UI/HeroSection";
import { Policy } from "../components/UI/policy";
import { Trusted } from "../components/UI/Trusted";

export const Home = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="section-feature">
        <FeatureProduct />
      </section>
      <section className="section-extra-product">
        <div className="container grid grid-three--cols">
          <Advert />
        </div>
      </section>

      <section className="section-policy">
        <div className="container grid grid-four--cols">
          <Policy />
        </div>
      </section>

      <section className="brand-section">
        <Trusted />
      </section>

      <section>
        <NewsletterBox />
      </section>
    </>
  );
};
