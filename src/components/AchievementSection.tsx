import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeUpBlur } from "@/components/FadeUpBlur";
import { FadeInScale } from "@/components/FadeInScale";

interface StatCardProps {
  value: string;
  label: string;
  bg?: string;
  textColor?: string;
  className?: string;
}

const StatCard = ({ value, label, bg = "bg-[#1a1a1a]", textColor = "text-white", className = "" }: StatCardProps) => (
  <div
    className={`relative flex flex-col justify-center items-start rounded-[36px] p-[30px] xl:p-[35px] shadow-card ${bg} ${textColor} ${className}`}
  >
    <span className="block text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-semibold leading-[1.1] mb-2">
      {value}
    </span>
    <span className="block text-[15px] lg:text-[16px] font-medium opacity-70">
      {label}
    </span>
  </div>
);

const AchievementSection = () => {
  return (
    <section className="px-5 py-16 lg:pt-[40px] lg:pb-24 lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] xl:px-[30px] 2xl:max-w-[1600px] 2xl:px-10">
      {/* Header */}
      <div className="text-center mb-10 lg:mb-14">
        <StaggeredFade
          text="Trusted by global leaders"
          className="text-[48px] font-semibold leading-[1.05] mb-4 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-center tracking-normal max-w-[800px] mx-auto"
        />
        <FadeUpBlur delay={0.3}>
          <p className="text-foreground max-w-[560px] mx-auto">
            Collaborating with industry leaders to&nbsp;create impactful solutions worldwide.
          </p>
        </FadeUpBlur>
      </div>

      {/* Stats cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] xl:gap-9 2xl:gap-[50px]">
        <FadeInScale index={0}>
          <StatCard
            value="430+"
            label="Clients Worldwide"
            bg="bg-[#1a1a1a]"
            textColor="text-white"
            className="w-full aspect-[5/3]"
          />
        </FadeInScale>
        <FadeInScale index={1}>
          <StatCard
            value="1,300"
            label="Projects Completed"
            bg="bg-[#aaff45]"
            textColor="text-black"
            className="w-full aspect-[5/3]"
          />
        </FadeInScale>
        <FadeInScale index={2}>
          <StatCard
            value="$7.8M"
            label="Revenue Generated"
            bg="bg-[#1a1a1a]"
            textColor="text-white"
            className="w-full aspect-[5/3]"
          />
        </FadeInScale>
      </div>
    </section>
  );
};

export default AchievementSection;
