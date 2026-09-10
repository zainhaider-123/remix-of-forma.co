import PlayIcon from "@/components/PlayIcon";
import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeUpBlur } from "@/components/FadeUpBlur";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import ProductCarousel from "@/components/ProductCarousel";
import EventsSection from "@/components/EventsSection";
import DesignSystemSection from "@/components/DesignSystemSection";
import ParadigmSection from "@/components/ParadigmSection";
import ExploreProductsSection from "@/components/ExploreProductsSection";
import AchievementSection from "@/components/AchievementSection";
import TeamSection from "@/components/TeamSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <section className="relative bg-background text-foreground text-lg overflow-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0 lg:gap-10 mx-0 pt-[20px] pb-0 lg:pt-[30px] lg:pb-0 xl:pt-[40px] xl:pb-0 2xl:pt-[60px] 2xl:pb-0 lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] 2xl:max-w-[1600px]">
        {/* Content */}
        <div className="flex-1 px-5 mx-auto lg:px-5 lg:m-0 xl:px-[30px] 2xl:px-10">
          <StaggeredFade
            text="We shape ideas into reality"
            className="text-[48px] font-semibold leading-[1.05] mb-3 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-left tracking-normal max-w-[440px]"
          />

          <FadeUpBlur delay={0.3}>
            <p className="max-w-[440px] text-foreground lg:m-0">
              At&nbsp;Forma.co we&nbsp;design purposeful digital experiences across
              a&nbsp;broad range of&nbsp;products, always working to&nbsp;make technology feel more human.
            </p>
          </FadeUpBlur>

          <FadeUpBlur delay={0.5}>
            <div className="mt-10 lg:mt-[50px]">
              <a
                href="https://vimeo.com/472181796"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-[58px] px-7 bg-primary text-primary-foreground font-medium rounded-2xl hover:opacity-90 transition-opacity">
                <PlayIcon />
                <span>Watch showreel</span>
              </a>
            </div>
          </FadeUpBlur>
        </div>

        {/* Hero video */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <HeroImage />
        </div>
      </div>
      <ProductCarousel />
      <EventsSection />
      <DesignSystemSection />
      <ParadigmSection />
      <ExploreProductsSection />
      <AchievementSection />
      <TeamSection />
      <KnowledgeSection />
      <Footer />
    </section>);

};

export default Index;