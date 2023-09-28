import React from "react";
import "./Home.css";
import ImgSection from "../ImgSection/ImgSection";
import Collection from "../Collection/Collection";
import Card from "../Card/Card";
import WalletCard from "../WalletCard/WalletCard";
import LiveLife from "../liveLife/LiveLife";
import DowlandApp from "../DowlandApp/DowlandApp";
import Follow from "../Follow/Follow";
import OurPromise from "../OurPromise/OurPromise";

function Home() {
  return (
    <div className="pagewidth">
      <ImgSection />
      <Collection />
      <Card />
      <WalletCard />
      <LiveLife />
      <DowlandApp />
      <Follow />
      <OurPromise />
    </div>
  );
}

export default Home;
