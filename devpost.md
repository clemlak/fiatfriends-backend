## Inspiration
We wanted to build something that would be easy for *anyone* to use and that could make crypto a part of peoples' day-to-day lives, even when interacting with non-crypto friends. We're bored of tedious "ACH-y" fiat rails that feel super institutional.


## What it does
FiatFriends is a framework that allows anybody to spin up a Liquidity Provider (LP) Node to facilitate a p2p fiat --> crypto transaction through common p2p payment apps. 

The workflow involves three parties: a sender who doesn't need to think about crypto at all, an LP who may take a cut of transactions, and a receiver who wants to receive payments in ETH or any ERC20 token (powered by Uniswap!). 

LPs compete on reputation and rates; recipients favor reliable LPs who quickly execute on fiat-crypto conversions with low rates. Recipients configure currency preferences and show their friends a QR code (maybe after paying for a meal!). Senders can simply scan a QR code that will deep link them into their favorite p2p **CASH** apps with everything pre-populated to complete the transaction. Easy!

We have released LP configurations for Venmo and Revolut. 

Notably, FiatFriends can be used as a fiat rail for anyone, not just friends - anyone who wants to receive crypto in a transaction can simply show a QR code to a sender. 

## How we built it
Since Venmo and Revolut (and other cash apps) don't have dev-friendly APIs like c2b payment apps, we had to customize our own workflows.

Liquidity providers have a few requirements - accessible URLs and QR builders that receivers can use. Outside of that, as long as they meet the workflow requirements, their implementations can be fairly customized - varying in rates supported apps, and other factors. We have created LP compliant reference 

## Challenges we ran into
No major p2p cash apps support any sort of developer-friendly API conducive to building native LP flows. 

Also, we had to build our LP flows in a way that it would be relatively annoying or hard for the p2p cash apps to shut down a network of LP nodes without significantly disrupting their existing workflows. 

Of course, we believe a production-level implementation rather than a hacky one would likely have forward-thinking p2p cash apps excited about what we're doing and working with us rather than against us. This could allow for things like baked-in KYC and transparency, POA, etc. 

## Accomplishments that we're proud of
Originally we only planned to complete an LP implementation for Venmo. However, we met various people over the course of the hackathon who were disappointed they wouldn't get a chance to try FiatFriends out on apps common in France and around the world. This motivated us to create a second LP implementation that works through the Revolut app, so more people around the hackathon could try it out!

## What we learned
We learned how to be creative when working with tools that are intentionally meant to stop what we're trying to do and overcoming those obstacles. We'd love to see some p2p cash apps be more supportive of crypto-dev friendly workflows; it could go a long way toward making crypto easy and natural to use.

Some of these apps are crypto-friendly while others are more conservative. We'd love to work with some of the crypto-friendly ones to make LP workflows more native to their apps.

## What's next for FiatFriends
LPs don't HAVE to send ETH/tokens to their end-destination. They could provide any sort of on-chain service. We'd love to spin up LPs with more complex services (sending ERC721s, directly opening Maker CDPs corresponding with the inbound fiat transaction, etc).

We would be very enthusiastic about partnering with some forward-thinking p2p payments applications to make more native/dev-friendly implementations of the Liquidity Provider workflow. We've identified Revolut, CashApp, and a few others who could concievably be interested in exploring this. 
