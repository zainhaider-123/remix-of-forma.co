import designSystemImg from "@/assets/design-system.png";
import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeInScale } from "@/components/FadeInScale";
import { FadeUpBlur } from "@/components/FadeUpBlur";

const DesignSystemSection = () => {
  return (
    <section className="px-5 py-16 lg:py-24 lg:pt-[40px] xl:pt-[50px] 2xl:pt-[60px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] xl:px-[30px] 2xl:max-w-[1600px] 2xl:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 2xl:gap-24">
        {/* Text column - left */}
        <div className="flex-1 max-w-[700px]">
          <StaggeredFade
            text="Building a unified language"
            className="text-[48px] font-semibold leading-[1.05] mb-4 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-left tracking-normal"
          />
          <FadeUpBlur delay={0.3}>
            <p className="text-foreground max-w-[500px] mb-10 lg:mb-12">
              Delivering consistent experiences across an&nbsp;entire product ecosystem demands
              a&nbsp;shared design language. Explore our principles and&nbsp;the technical
              foundations behind them.
            </p>
          </FadeUpBlur>
          <FadeUpBlur delay={0.5}>
            <a
              href="#"
              className="inline-flex items-center h-[58px] px-8 bg-primary text-primary-foreground font-medium rounded-2xl hover:opacity-90 transition-opacity"
            >
              Design system
            </a>
          </FadeUpBlur>
        </div>

        {/* Image column - right */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <FadeInScale>
            <img
              src={designSystemImg}
              alt="Design system illustration"
              className="w-full max-w-[500px] 2xl:max-w-[600px] object-contain"
            />
          </FadeInScale>
        </div>
      </div>
    </section>
  );
};

export default DesignSystemSection;
