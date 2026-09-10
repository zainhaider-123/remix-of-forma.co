import { StaggeredFade } from "@/components/StaggeredFade";
import { FadeUpBlur } from "@/components/FadeUpBlur";

const SocialIconOutline = ({ d, href, label }: { d?: string; href: string; label?: string }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border border-foreground/20 hover:bg-foreground/10 transition-colors"
    >
      {label ? (
        <span className="text-foreground font-semibold text-[18px]">{label}</span>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
          <path d={d} />
        </svg>
      )}
    </a>
  </li>
);

const KnowledgeSection = () => {
  return (
    <section className="bg-background px-5 py-16 lg:pt-[40px] lg:pb-24 lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] xl:px-[30px] 2xl:max-w-[1600px] 2xl:px-10">
      <div className="lg:flex lg:justify-between lg:items-start">
        <div className="lg:max-w-[780px]">
          <StaggeredFade
            text="Insights, updates, and ideas"
            className="text-[48px] font-semibold leading-[1.05] mb-3 lg:text-[72px] xl:text-[80px] 2xl:text-[96px] lg:mb-6 text-left tracking-normal"
          />
          <FadeUpBlur delay={0.3}>
            <p className="text-foreground max-w-[500px]">
              Follow our channels to&nbsp;stay in&nbsp;the loop on&nbsp;career opportunities,
              upcoming events, and&nbsp;industry insights.
            </p>
          </FadeUpBlur>
        </div>
        <div className="mt-8 lg:mt-3 lg:w-[320px] lg:min-w-[280px]">
          <ul className="flex flex-wrap gap-3 justify-center lg:justify-end">
            {/* VK */}
            <SocialIconOutline href="#" label="VK" />
            {/* Dribbble */}
            <SocialIconOutline href="#" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 0 0 4.392-6.87zM15.97 19.654c-.15-.9-.747-4.032-2.172-7.77-.024.008-.048.013-.073.02-5.74 2.004-7.793 5.988-7.98 6.375A10.122 10.122 0 0 0 12 22.11c1.41 0 2.757-.287 3.97-.456zM4.074 16.91c.24-.42 3.044-5.088 8.306-6.815.135-.045.27-.084.405-.12-.255-.58-.525-1.16-.81-1.73C6.97 9.855 2.14 9.8 1.732 9.793c-.003.135-.018.27-.018.407 0 2.66 1.014 5.073 2.36 6.71zm-2.3-9.2c.415.008 4.54.04 9.213-1.223C9.103 3.79 6.985 2.27 6.67 2.04a10.2 10.2 0 0 0-4.896 5.67zM8.9 1.396c.334.238 2.468 1.765 4.36 4.53 4.152-1.556 5.912-3.918 6.1-4.193A10.092 10.092 0 0 0 12 1.8c-1.06 0-2.1.13-3.1.396v-.8zM20.847 3.106c-.225.3-2.13 2.77-6.41 4.492.236.48.46.968.674 1.46.076.178.15.356.22.534 3.407-.428 6.793.26 7.13.327a10.094 10.094 0 0 0-1.614-6.813z" />
            {/* Behance */}
            <SocialIconOutline href="#" label="Bē" />
            {/* YouTube */}
            <SocialIconOutline href="#" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
