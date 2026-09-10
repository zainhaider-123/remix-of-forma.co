import teamImg from "@/assets/team-illustration.png";
import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeInScale } from "@/components/FadeInScale";
import { FadeUpBlur } from "@/components/FadeUpBlur";

const TeamSection = () => {
  return (
    <section className="px-5 py-16 lg:pt-[40px] lg:pb-24 lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] xl:px-[30px] 2xl:max-w-[1600px] 2xl:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 2xl:gap-24">
        {/* Image column - left */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <FadeInScale>
            <img
              src={teamImg}
              alt="Assembling the best team"
              className="w-full max-w-[500px] 2xl:max-w-[600px] object-contain"
            />
          </FadeInScale>
        </div>

        {/* Text column - right */}
        <div className="flex-1 max-w-[700px]">
          <StaggeredFade
            text="The people behind the work"
            className="text-[48px] font-semibold leading-[1.05] mb-4 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-left tracking-normal"
          />
          <FadeUpBlur delay={0.3}>
            <p className="text-foreground max-w-[500px] mb-10 lg:mb-12">
              We&nbsp;believe great design starts with great people. Our team drives every
              decision, shapes our values, and&nbsp;defines our culture. We&nbsp;are committed
              to&nbsp;making work fulfilling and&nbsp;remain open to&nbsp;fresh perspectives
              and&nbsp;new possibilities.
            </p>
          </FadeUpBlur>
          <FadeUpBlur delay={0.5}>
            <a
              href="#"
              className="inline-flex items-center h-[58px] px-8 bg-primary text-primary-foreground font-medium rounded-2xl hover:opacity-90 transition-opacity"
            >
              Vacancies
            </a>
          </FadeUpBlur>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
