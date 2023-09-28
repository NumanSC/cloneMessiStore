import React from "react";
import "./WalletCard.css";
import wallet from "./Messi_Wallet_592x592.webp";
function WalletCard() {
  return (
    <>
      <div className="walletContainer">
        <div className="item">
          <img src={wallet} alt="" />
        </div>
        <div className="item2">
          <div className="wallet1">
            <h2 className="text-center">THE MESSI WALLET</h2>
            <p className="text-center">
              Outpace the competition with the fastest wallet <br />
              around. On or off the field, access your cards at the
              <br /> click of a button to make checkout easier than ever.
              <br /> Don’t let your wallet slow you down - join the fast lane <br />
              with the Messi Smart Wallet.
            </p>
            <div className="buttons">
              <button className="btn btn-secondary">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletCard;
