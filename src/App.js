import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start selling & grow your NFTs"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join the people's NFT marketplace now."
        showBtn
        mockupImg={assets.homeHero}
        // wave background
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of NFT marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="The marketplace is built using Expo which runs natively on all users devices. You can easily get your app into poeple's hands."
        showBtn
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with care by{" "}
        </p>
        <span className="bold">Binyam Dawit 😎</span>
      </div>
    </>
  );
};

export default App;
