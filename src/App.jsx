import React, { useEffect } from 'react';
 import twitterLogo from'./assets/twitter-logo.svg';
 import'./App.css';
 //Constants
   const TWITTER_HANDLE= '_buildspace';
 const TWITTER_LINK= `https://twitter.com/Apoorv17785883`;
const App= () => {
   //Actions
      const checkIfWalletIsConnected= async() => {
    try{
      const{ solana } = window;
if(solana) {
        if(solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
        
        }
      } else{
        alert('Solana object not found! Get a Phantom Wallet :ghost:');
      }
    } catch(error) {
      console.error(error);
    }
  };
/*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet= async() => {};
/*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer= () => (
    <button className="cta-button connect-wallet-button"onClick={connectWallet}>Connect to Wallet
    </button>);
  
  //UseEffects
 useEffect(() =>{
    const onLoad= async() => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return() =>window.removeEventListener('load', onLoad);
  }, []);
return(
    <div className="App"><div className="container"><div className="header-container"><p className="header">🖼 GIF Portal</p><p className="sub-text">View your GIF collection in the metaverse :sparkles:
          </p>{/* Render your connect to wallet button right here */}
          {renderNotConnectedContainer()}
        </div><div className="footer-container"><img alt="Twitter Logo"className="twitter-logo"src={twitterLogo}/><a className="footer-text"href='https://twitter.com/Apoorv17785883' target="_blank"rel="noreferrer">{`built on @Apoorv17785883`}</a></div></div></div>);
 };
export default App;