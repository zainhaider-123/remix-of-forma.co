import { useEffect, useRef, useState, useCallback } from "react";

import cloudImg from "@/assets/products/cloud.png";
import connectImg from "@/assets/products/connect.png";
import tasksImg from "@/assets/products/tasks.png";
import calendarImg from "@/assets/products/calendar.png";
import videoImg from "@/assets/products/video.png";
import feedImg from "@/assets/products/feed.png";
import mailImg from "@/assets/products/mail.png";
import voiceImg from "@/assets/products/voice.png";
import browserImg from "@/assets/products/browser.png";
import streamImg from "@/assets/products/stream.png";
import givingImg from "@/assets/products/giving.png";
import driveImg from "@/assets/products/drive.png";

const products = [
  { title: "Drive", subtitle: "Cloud file\naggregator", image: driveImg, dark: false },
  { title: "Connect", subtitle: "Everything for\ncommunication", image: connectImg, dark: true },
  { title: "Calendar", subtitle: "Smart meeting\nplanner built in", image: calendarImg, dark: false },
  { title: "Video", subtitle: "Video calls via\nyour inbox", image: videoImg, dark: true },
  { title: "Cloud", subtitle: "Secure file\nstorage", image: cloudImg, dark: false },
  { title: "Giving", subtitle: "We help people and\ncharitable causes", image: givingImg, dark: true },
  { title: "Tasks", subtitle: "Get things done\nwith ease", image: tasksImg, dark: false },
  { title: "Feed", subtitle: "Daily digest and\npersonal picks", image: feedImg, dark: true },
  { title: "Voice", subtitle: "Friendly voice\nassistant", image: voiceImg, dark: false },
  { title: "Browser", subtitle: "Fast and secure\nweb browser", image: browserImg, dark: true },
  { title: "Stream", subtitle: "A video service\nthat entertains", image: streamImg, dark: false },
  { title: "Mail", subtitle: "The email service\nof tomorrow", image: mailImg, dark: true },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Double the items for infinite loop
  const allItems = [...products, ...products];

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    const firstCard = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    if (!firstCard) return 0;
    return firstCard.offsetWidth + parseFloat(getComputedStyle(firstCard).marginRight || "0");
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = getCardWidth();
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  }, [getCardWidth]);

  useEffect(() => {
    // Start auto-scroll
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // When we reach the end of the first set, jump back seamlessly
        if (next >= products.length) {
          // First scroll to the duplicate set position
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
            }
            setCurrentIndex(0);
          }, 500);
          return next;
        }
        return next;
      });
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, scrollToIndex]);

  return (
    <section className="bg-background overflow-hidden pb-10 lg:pb-[40px]">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden pt-5"
        style={{ scrollbarWidth: "none" }}
      >
        {allItems.map((product, i) => (
          <div
            key={`${product.title}-${i}`}
            data-card
            className="shrink-0 pl-3 pr-[18px] pb-[97px] lg:pr-9 xl:pr-[46px] 2xl:pr-14"
          >
            <div className="relative shadow-card rounded-[36px]">
              <div className="w-[259px] h-[167px] lg:w-[317px] lg:h-[206px] 2xl:w-[390px] 2xl:h-[270px] rounded-[36px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className={`absolute left-[25px] bottom-[25px] lg:left-[35px] lg:bottom-[35px] 2xl:left-10 2xl:bottom-[46px] ${product.dark ? "text-primary-foreground" : "text-foreground"}`}>
                <span className="block font-semibold text-[18px] lg:text-[20px] 2xl:text-[22px] mb-2 lg:mb-[9px] 2xl:mb-2">
                  {product.title}
                </span>
                <span className="block text-[13px] leading-[1.3] opacity-80 whitespace-pre-line">
                  {product.subtitle}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
