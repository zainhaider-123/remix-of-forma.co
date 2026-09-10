import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeUpBlur } from "@/components/FadeUpBlur";
import { FadeInScale } from "@/components/FadeInScale";

const SocialIcon = ({ d, href }: { d: string; href: string }) => (
  <li className="ml-3 first:ml-0 lg:ml-0 lg:mr-5 last:lg:mr-0">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
        <path d={d} />
      </svg>
    </a>
  </li>
);

interface EventCardProps {
  month: string;
  title: string;
  className?: string;
  bg?: string;
  textColor?: string;
}

const EventCard = ({ month, title, className = "", bg = "bg-[#1a1a1a]", textColor = "text-white" }: EventCardProps) => (
  <a
    href="#"
    className={`relative flex flex-col justify-between rounded-[36px] group p-[30px] xl:p-[35px] shadow-card ${bg} ${textColor} ${className}`}
  >
    <div>
      <span className="block text-[13px] font-medium mb-3 opacity-70">
        {month}
      </span>
      <span className="block text-[22px] xl:text-[26px] font-semibold leading-[1.15]">
        {title}
      </span>
    </div>
    <span className="block text-[14px] font-semibold mt-6 group-hover:opacity-70 transition-opacity">
      Read more
    </span>
  </a>
);

const EventsSection = () => {
  return (
    <section className="bg-background mx-auto px-5 pt-[60px] pb-[80px] lg:max-w-[960px] lg:mx-auto lg:mb-[115px] lg:p-0 xl:max-w-[1150px] xl:mb-[139px] 2xl:max-w-[1600px] 2xl:mb-[-136px]">
      {/* Header */}
      <div className="pb-10 lg:flex lg:justify-between lg:pb-[45px] lg:pl-5 xl:pb-[30px] 2xl:px-10 2xl:pb-[88px]">
        <div className="lg:max-w-[780px]">
          <StaggeredFade
            text="We host creative gatherings"
            className="text-[48px] font-semibold leading-[1.05] mb-3 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-left tracking-normal"
          />
          <FadeUpBlur delay={0.3}>
            <p className="text-foreground max-w-[440px]">
              Join our channels to&nbsp;stay updated on&nbsp;upcoming talks, workshops, and&nbsp;creative sessions.
            </p>
          </FadeUpBlur>
        </div>
        <div className="mt-6 lg:mt-3 lg:w-[320px] lg:min-w-[320px] lg:-mr-5">
          <ul className="flex flex-wrap justify-center lg:justify-start">
            <SocialIcon href="#" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            <SocialIcon href="#" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            <SocialIcon href="#" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
            <SocialIcon href="#" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            
          </ul>
        </div>
      </div>

      {/* Event cards grid - hidden on mobile, 3 columns on desktop */}
      <div className="hidden lg:flex lg:gap-[30px] xl:gap-9 2xl:gap-[50px] 2xl:px-10">
        {/* Column 1 */}
         <div className="flex-1 lg:mt-[84px] xl:mt-[100px] 2xl:mt-[120px]">
          <div className="lg:mb-[30px] xl:mb-9 2xl:mb-[50px]">
            <FadeInScale index={0}>
              <EventCard
                month="April"
                title="Brand identity systems"
                bg="bg-[#1a1a1a]"
                textColor="text-white"
                className="w-full aspect-[5/3.3]"
              />
            </FadeInScale>
          </div>
          <FadeInScale index={1}>
            <EventCard
              month="November"
              title="Forma Creative Cup 2024"
              bg="bg-white"
              textColor="text-black"
              className="w-full aspect-[5/3.3]"
            />
          </FadeInScale>
        </div>

        {/* Column 2 - tall card */}
        <div className="flex-1 lg:mt-[111px] xl:mt-[133px] 2xl:mt-[160px]">
          <FadeInScale index={2}>
            <EventCard
              month="August"
              title="Forma Design Conference & Creative Talk 2025"
              bg="bg-[#1a1a1a]"
              textColor="text-white"
              className="w-full aspect-[5/5.8] [&>div>span:last-child]:text-[32px] xl:[&>div>span:last-child]:text-[40px]"
            />
          </FadeInScale>
        </div>

        {/* Column 3 */}
        <div className="flex-1">
          <div className="lg:mb-[30px] xl:mb-9 2xl:mb-[50px]">
            <FadeInScale index={3}>
              <EventCard
                month="March"
                title="Forma Design Circle: Inclusive Design"
                bg="bg-[#1a1a1a]"
                textColor="text-white"
                className="w-full aspect-[5/3.3]"
              />
            </FadeInScale>
          </div>
          <FadeInScale index={4}>
            <EventCard
              month="December"
              title="AX Creative Industries Festival"
              bg="bg-[#aaff45]"
              textColor="text-black"
              className="w-full aspect-[5/5.8] [&>div>span:last-child]:text-[32px] xl:[&>div>span:last-child]:text-[40px]"
            />
          </FadeInScale>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
