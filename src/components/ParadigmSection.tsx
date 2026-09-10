import visualLanguageImg from "@/assets/paradigm/visual-language.png";
import brandBookImg from "@/assets/paradigm/brand-book.png";
import workingWithTextImg from "@/assets/paradigm/working-with-text.png";
import productLogosImg from "@/assets/paradigm/product-logos.png";
import componentsInCodeImg from "@/assets/paradigm/components-in-code.png";
import { FadeInScale } from "@/components/FadeInScale";

interface ParadigmCardProps {
  image: string;
  title: string;
  bg: string;
  textColor: string;
  className?: string;
}

const ParadigmCard = ({ image, title, bg, textColor, className = "" }: ParadigmCardProps) =>
<a
  href="#"
  className={`relative flex flex-col justify-between rounded-[36px] overflow-visible group shadow-card ${bg} ${textColor} ${className}`}>

    {/* Card image - overlapping left, rounded */}
    <img
    src={image}
    alt={title}
    className="absolute top-[48%] -translate-y-1/2 left-[-20px] h-[60px] w-auto object-contain rounded-xl shadow-lg lg:left-[-21px] lg:h-[72px] xl:h-[80px] 2xl:h-[100px]"
    loading="lazy" />

    {/* Text content */}
    <div className="pl-[95px] pt-[30px] pr-[30px] lg:pl-[114px] lg:pt-[35px] lg:pr-[40px] xl:pl-[128px] 2xl:pl-[160px]">
      <span className="block text-[13px] font-medium opacity-70 mb-2 lg:mb-[9px] 2xl:mb-[22px]">
        Paradigm 2.0
      </span>
      <span className="block xl:text-[32px] 2xl:text-[38px] font-semibold leading-[1.15] 2xl:max-w-[380px] text-lg">
        {title}
      </span>
    </div>
    <span className="block text-[14px] font-semibold pb-[30px] pl-[95px] lg:pl-[114px] lg:pb-[35px] xl:pl-[128px] 2xl:pl-[160px] group-hover:opacity-70 transition-opacity lg:absolute lg:bottom-0 lg:left-0">
      Read more
    </span>
  </a>;


const ParadigmSection = () => {
  return (
    <section className="bg-background px-5 py-16 lg:pt-[40px] lg:pb-24 lg:max-w-[960px] lg:mx-auto xl:max-w-[1150px] xl:px-[30px] 2xl:max-w-[1600px] 2xl:px-10">
      {/* Desktop: 3-column staggered layout */}
      <div className="hidden lg:flex lg:gap-[30px] xl:gap-9 2xl:gap-[50px]">
        {/* Column 1 */}
        <div className="flex-1 lg:mt-[47px] xl:mt-[56px] 2xl:mt-[79px]">
          <div className="lg:mb-[30px] xl:mb-[36px] 2xl:mb-[50px]">
            <FadeInScale index={0}>
              <ParadigmCard
                image={visualLanguageImg}
                title="Visual language"
                bg="bg-[#2563eb]"
                textColor="text-white"
                className="w-full lg:h-[190px] xl:h-[220px] 2xl:h-[280px]" />

            </FadeInScale>
          </div>
          <FadeInScale index={1}>
            <ParadigmCard
              image={productLogosImg}
              title="Product logos"
              bg="bg-white"
              textColor="text-black"
              className="w-full lg:h-[190px] xl:h-[220px] 2xl:h-[280px]" />

          </FadeInScale>
        </div>

        {/* Column 2 */}
        <div className="flex-1 lg:mt-[85px] xl:mt-[103px] 2xl:mt-[143px]">
          <div className="lg:mb-[30px] xl:mb-[36px] 2xl:mb-[50px]">
            <FadeInScale index={2}>
              <ParadigmCard
                image={brandBookImg}
                title="Brand book"
                bg="bg-white"
                textColor="text-black"
                className="w-full lg:h-[190px] xl:h-[220px] 2xl:h-[280px]" />

            </FadeInScale>
          </div>
          <FadeInScale index={3}>
            <ParadigmCard
              image={componentsInCodeImg}
              title="Components in code"
              bg="bg-[#1a1a1a]"
              textColor="text-white"
              className="w-full lg:h-[190px] xl:h-[220px] 2xl:h-[280px]" />

          </FadeInScale>
        </div>

        {/* Column 3 */}
        <div className="flex-1">
          <FadeInScale index={4}>
            <ParadigmCard
              image={workingWithTextImg}
              title="Working with text"
              bg="bg-[#1a1a1a]"
              textColor="text-white"
              className="w-full lg:h-[190px] xl:h-[220px] 2xl:h-[280px]" />

          </FadeInScale>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-5 lg:hidden">
        <FadeInScale index={0}>
          <ParadigmCard
            image={visualLanguageImg}
            title="Visual language"
            bg="bg-[#2563eb]"
            textColor="text-white"
            className="w-full h-[200px]" />

        </FadeInScale>
        <FadeInScale index={1}>
          <ParadigmCard
            image={brandBookImg}
            title="Brand book"
            bg="bg-white"
            textColor="text-black"
            className="w-full h-[200px]" />

        </FadeInScale>
        <FadeInScale index={2}>
          <ParadigmCard
            image={workingWithTextImg}
            title="Working with text"
            bg="bg-[#1a1a1a]"
            textColor="text-white"
            className="w-full h-[200px]" />

        </FadeInScale>
        <FadeInScale index={3}>
          <ParadigmCard
            image={productLogosImg}
            title="Product logos"
            bg="bg-white"
            textColor="text-black"
            className="w-full h-[200px]" />

        </FadeInScale>
        <FadeInScale index={4}>
          <ParadigmCard
            image={componentsInCodeImg}
            title="Components in code"
            bg="bg-[#1a1a1a]"
            textColor="text-white"
            className="w-full h-[200px]" />

        </FadeInScale>
      </div>
    </section>);

};

export default ParadigmSection;