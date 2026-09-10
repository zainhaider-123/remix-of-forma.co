const HeartIcon = () => (
  <svg height="28" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.58007 0.429949C8.79407 0.174426 11.2146 0 14 0C16.7315 0 19.1122 0.167724 20.3481 0.415205C23.9821 1.09548 26.8555 3.94712 27.5683 7.57053C27.8248 8.78213 28 11.2078 28 14C28 16.7923 27.8248 19.218 27.5683 20.4296C26.855 24.0555 23.9781 26.9088 20.3403 27.5863C19.1022 27.833 16.7257 28 14 28C11.2203 28 8.80385 27.8263 7.58744 27.5716C4.06405 26.8834 1.26804 24.1513 0.485532 20.6617C0.200032 19.5494 0 16.984 0 14C0 11.0162 0.200032 8.4507 0.485532 7.3383C1.26749 3.85111 4.06015 1.12045 7.58007 0.429949Z" fill="hsl(240 5% 10%)" />
    <path d="M19.2244 9.93814C20.3928 11.189 20.3909 13.2018 19.2244 14.4526L14.0532 20C12.3269 18.1522 10.6026 16.3065 8.87636 14.4587C7.70788 13.2079 7.70788 11.1951 8.87636 9.94426C10.0448 8.6934 11.9261 8.6934 13.0946 9.94426L14.0475 10.9649L15.0061 9.93814C16.1746 8.68729 18.0559 8.68729 19.2244 9.93814Z" fill="white" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="flex items-center justify-between px-5 py-6 lg:px-5 xl:px-[30px] 2xl:px-10">
        <span className="text-xl font-semibold tracking-tight text-muted-foreground">Forma.co</span>

        <div className="hidden lg:flex items-center">
          <ul className="flex text-base gap-8">
            <li><a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Design system</a></li>
            <li><a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Research</a></li>
            <li><a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Vacancies</a></li>
            <li><a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Contacts</a></li>
          </ul>
          <div className="ml-8">
            <a href="#" aria-label="Love">
              <HeartIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
