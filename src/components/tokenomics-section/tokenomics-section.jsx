import './tokenomics-section.css'

import React from 'react'
import TokenomCard from '../tokenom-card/tokenom-card'


const TokenomicsSection = () => {
  return (
    <div className="tokenomics-section">
        <h2 className="heading">Tokenomics</h2>
        <div className="cards-container">
          <TokenomCard
            title={"Total Supply"}
            value={"1 Billion"}
            imgUrl='./supply.png'
            width="150"
            description={
              "Guarantees smooth buying and selling and an overall stronger liquidity."
            }
          />
          <TokenomCard
            title={"Buy/Sell Tax"}
            value={"$0"}
            imgUrl='./tax.png'
            width="160"
            description={
              "Cat God does not tax holders, after all.. it is THE Cat God."
            }
          />
          <TokenomCard
            title={"Dev Supply"}
            value={"3%"}
            imgUrl='./dev.png'
            width="140"
            description={
              "Given out as giveaways to meme creators, influencers and raid leaders/participants."
            }
          />
        </div>
      </div>
  )
}

export default TokenomicsSection