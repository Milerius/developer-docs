(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{310:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"atomicdex-and-atomic-swaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicdex-and-atomic-swaps","aria-hidden":"true"}},[e._v("#")]),e._v(" AtomicDEX and Atomic Swaps")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Komodo’s decentralized exchange, AtomicDEX, allows people to trade cryptocurrency coins without a counterparty risk. The protocol is open source and trading is available for any coin that any developers choose to connect to AtomicDEX.")]),e._v(" "),a("p",[e._v('Our service fully realizes decentralized order matching and trade clearing. The order-matching aspect relies on a peer-to-peer network to build public orderbooks, and trade clearing is executed through an atomic cross-chain protocol, also called an "atomic swap."')]),e._v(" "),a("h2",{attrs:{id:"current-problems-in-cryptocurrency-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-problems-in-cryptocurrency-exchange","aria-hidden":"true"}},[e._v("#")]),e._v(" Current Problems in Cryptocurrency Exchange")]),e._v(" "),a("h4",{attrs:{id:"centralized-exchanges-are-popular-but-limited"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralized-exchanges-are-popular-but-limited","aria-hidden":"true"}},[e._v("#")]),e._v(" Centralized Exchanges are Popular, but Limited")]),e._v(" "),a("p",[e._v("The current, most practical method for cryptocurrency exchange requires the use of centralized exchange services.")]),e._v(" "),a("p",[e._v('These centralized solutions require vouchers to perform the exchange, wherein the user sends their funds into the care of a corporate entity and receives "I Owe You" (IOU) statements in return. The user then trades these IOUs within a controlled environment and, when finished, returns their IOUs to the corporate entity for reimbursement.')]),e._v(" "),a("p",[e._v("Centralized exchanges carry great risk. Among many dangers present in this system, users are under the constant risk of their assets being stolen either by an inside theft or an outside hack. Furthermore, the operators of centralized exchanges are under intense legal and social pressure, as the operators are responsible both for the safety of thousands of users' funds and for the users' behaviors on their platforms.")]),e._v(" "),a("p",[e._v("To eliminate such dangers and limitations requires the creation of a decentralized alternative, wherein either the entity holding the funds during the trading process is not centralized, or the users are allowed to trade directly without middleman involvement.")]),e._v(" "),a("h4",{attrs:{id:"the-concept-and-shortcomings-of-a-normal-decentralized-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-concept-and-shortcomings-of-a-normal-decentralized-exchange","aria-hidden":"true"}},[e._v("#")]),e._v(" The Concept and Shortcomings of a Normal Decentralized Exchange")]),e._v(" "),a("p",[e._v("A decentralized exchange (DEX) allows users to trade funds within an environment that is at least partially decentralized.")]),e._v(" "),a("p",[e._v('Decentralization of an exchange can take many forms. For example, in 2014 Komodo developers began one of the earliest instances of a decentralized exchange, called "InstantDEX."')]),e._v(" "),a("p",[e._v('In this DEX, users sent their blockchain coins not to a centralized entity, but rather to a decentralized "gateway." The gateway was owned and controlled by several cooperating entities who were chosen from the online community. The gateway automatically distributed IOUs (called "proxy tokens") to the users, who then traded within the partially decentralized environment.')]),e._v(" "),a("p",[e._v("When finished, users sent their proxy tokens back to the gateway, and the gateway managers collectively signed for the release of the users' blockchain funds. The underlying technology of this solution is still in use by many blockchain platforms, and is sometimes referred to as a proxy-token protocol.")]),e._v(" "),a("p",[e._v("This form of a DEX is too limited to compete with centralized exchanges. Among many drawbacks, a proxy-token decentralized exchange must still have a storage center to hold the external cryptocurrencies represented by the proxy tokens. At best, this storage center is only distributed across several authority figures, and therefore users must still surrender control over their assets for the duration of the trading process.")]),e._v(" "),a("p",[e._v("As of today, no decentralized exchange has successfully replaced any of their centralized counterparts.")]),e._v(" "),a("h2",{attrs:{id:"atomicdex-—-a-complete-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicdex-—-a-complete-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" AtomicDEX — A Complete Solution")]),e._v(" "),a("p",[e._v("We now present a fully functional, new decentralized technology that makes a competitive decentralized exchange possible. We call our technology AtomicDEX, and it allows people to freely and safely exchange cryptocurrency coins from one person to another.")]),e._v(" "),a("p",[e._v("The AtomicDEX decentralized exchange creates a competitive method for bartering cryptocurrencies, combining the key components of order matching and trade clearing.")]),e._v(" "),a("p",[e._v('These components are combined into a single integrated system that allows users to make a request to trade their coins, find a suitable trading partner, and complete the trade using an "atomic swap."')]),e._v(" "),a("p",[e._v("Unlike previous DEXs, AtomicDEX does not require users to send funds to either a centralized or decentralized party during the trading process. Rather, users maintain full control over the private keys of their funds at all times.")]),e._v(" "),a("h2",{attrs:{id:"the-decentralized-orderbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-decentralized-orderbook","aria-hidden":"true"}},[e._v("#")]),e._v(" The Decentralized Orderbook")]),e._v(" "),a("p",[e._v("The first component of AtomicDEX is Order Matching. This is the process of pairing a user’s offer to buy with another user’s offer to sell. The data of these offers form an orderbook.")]),e._v(" "),a("p",[e._v("The process of matching orders is not the actual trade itself, but is only a digitally created promise between users stating that they will perform their parts of the trade.")]),e._v(" "),a("p",[e._v("AtomicDEX features several technologies to facilitate order matching, including a peer-to-peer network, a decentralized orderbook, and a multicoin passphrase.")]),e._v(" "),a("h5",{attrs:{id:"order-matching-with-full-relay-and-non-relay-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-matching-with-full-relay-and-non-relay-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Order Matching with Full-Relay and Non-Relay Nodes")]),e._v(" "),a("p",[e._v("To create a decentralized orderbook, AtomicDEX creates a custom peer-to-peer (P2P) network.")]),e._v(" "),a("p",[e._v("In this network, when a node places an order, other nodes on the network collaborate to distribute the data until all nodes are informed. Each node utilizes the data to build the orderbook locally. No centralized server is required.")]),e._v(" "),a("p",[e._v("To manage this P2P network, AtomicDEX utilizes two separate types of nodes: a full-relay node and a non-relay node.")]),e._v(" "),a("p",[e._v("The difference between a full-relay node and a non-relay node is that the former is typically a high-volume trader who provides liquidity to the network in exchange for being a trading hub on the network. This puts the trader in the position of being able to complete trades more quickly than their competitors.")]),e._v(" "),a("p",[e._v("The latter type of node (non-relay) is the more common user, and these nodes rely on the full-relay nodes. A non-relay node has all the same available trading options. We expect that most nodes joining the network will be non-relay nodes.")]),e._v(" "),a("p",[e._v("There are no requirements or payments necessary to become either type of node, and so anyone desiring to become a high-volume full-relay node will find no restrictions.")]),e._v(" "),a("h5",{attrs:{id:"one-passphrase-many-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-passphrase-many-addresses","aria-hidden":"true"}},[e._v("#")]),e._v(" One Passphrase, Many Addresses")]),e._v(" "),a("p",[e._v("As a part of order matching, AtomicDEX features a specialty wallet that can manage and trade among a multiplicity of different blockchain coins. In this technology, the user creates a single passphrase and uses this to unlock all public addresses associated with their desired coins.")]),e._v(" "),a("p",[e._v("The complexities of this process are managed by Komodo's Iguana Core technology.")]),e._v(" "),a("h2",{attrs:{id:"atomic-swaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomic-swaps","aria-hidden":"true"}},[e._v("#")]),e._v(" Atomic Swaps")]),e._v(" "),a("p",[e._v("For trade clearing, AtomicDEX implements our own unique variation of atomic swaps.")]),e._v(" "),a("p",[e._v("An atomic swap is a technology that allows two users to trade cryptocurrencies across two separate blockchains without requiring an intermediary third party.")]),e._v(" "),a("p",[e._v("The original concept of an atomic swap was created in 2013 by Tier Nolan and many other Bitcoin enthusiasts on the Bitcointalk.org chat forum. In 2014, this conversation inspired members of the Komodo development team to experiment with atomic swaps, and they have remained a key technology in our strategy ever since.")]),e._v(" "),a("h4",{attrs:{id:"the-value-of-the-atomic-swap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-value-of-the-atomic-swap","aria-hidden":"true"}},[e._v("#")]),e._v(" The Value of the Atomic Swap")]),e._v(" "),a("p",[e._v("To understand why the atomic-swap protocol is necessary, one must first recall that computer code is executed in linear fashion. Even if we were to assume that both parties in a trade may be honest, on a computer the process of taking money from each digital wallet and pulling the money into the open must happen one wallet at a time.")]),e._v(" "),a("p",[e._v("Therefore, one person must release control over their money first. The atomic-swap protocol protects that person from vulnerability. Without the atomic swap, any malicious party involved would be able to destroy the fairness of the trade.")]),e._v(" "),a("p",[e._v("A key aspect of a proper atomic swap is that at each stage of the trade-clearing process, each user has incentives to proceed to the next step in the proper manner and disincentives to avoid abandoning the procedure. With this structure in place, regardless of a failure by either user to complete the protocol, each user receives a proper reward.")]),e._v(" "),a("h4",{attrs:{id:"atomicdex-manages-a-public-trading-profile-for-maker-and-taker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicdex-manages-a-public-trading-profile-for-maker-and-taker","aria-hidden":"true"}},[e._v("#")]),e._v(" AtomicDEX Manages a Public Trading Profile for Maker and Taker")]),e._v(" "),a("p",[e._v("In addition to the atomic-swap protocol, AtomicDEX also allows users to track the behavior of trading partners on the network via a Trust API.")]),e._v(" "),a("p",[e._v("The Trust API is not based on personal identity, but rather on behavior as associated with public addresses.")]),e._v(" "),a("p",[e._v("As a user practices good behavior on the network while maintaining a consistent public address, their network trust can increase, thus improving their odds of a willing trading partner.")]),e._v(" "),a("p",[e._v("Use of the Trust API is optional for all users.")]),e._v(" "),a("h4",{attrs:{id:"introducing-taker-and-maker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-taker-and-maker","aria-hidden":"true"}},[e._v("#")]),e._v(" Introducing Taker and Maker")]),e._v(" "),a("p",[e._v('There are two parties in an atomic swap: the liquidity provider and the liquidity receiver. We call the provider "Maker" and the receiver "Taker."')]),e._v(" "),a("h5",{attrs:{id:"taker-makes-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taker-makes-a-request","aria-hidden":"true"}},[e._v("#")]),e._v(" Taker Makes a Request")]),e._v(" "),a("p",[e._v("The process of an atomic swap begins with the person who makes the initial request.")]),e._v(" "),a("p",[e._v("Taker will need two transactions to perform her swap. One transaction will cover the protocol fee, which is roughly 1/777th the size of the desired order. We call this fee the "),a("code",[e._v("<dexfee>")]),e._v(", and its primary purpose is to serve as a disincentive to Taker from spamming the network with rapid requests.")]),e._v(" "),a("p",[e._v("The second transaction required of Taker sends the actual amount she intends to swap. AtomicDEX first verifies that she has these funds, but for the moment she retains these funds in the safety of her own digital wallet.")]),e._v(" "),a("h5",{attrs:{id:"maker-answers-taker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maker-answers-taker","aria-hidden":"true"}},[e._v("#")]),e._v(" Maker Answers Taker")]),e._v(" "),a("p",[e._v("On the other side of the atomic swap, we have the liquidity provider — Maker. Maker sees the request on the network for Taker’s atomic swap and decides to accept the trade. Now his part of the process begins.")]),e._v(" "),a("p",[e._v("To complete the trade, he must send one transaction. It will be worth 100% of what he and Taker intend to actually trade.")]),e._v(" "),a("h4",{attrs:{id:"taker-and-maker-are-committed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taker-and-maker-are-committed","aria-hidden":"true"}},[e._v("#")]),e._v(" Taker and Maker Are Committed")]),e._v(" "),a("p",[e._v("Assuming Taker and Maker are successfully connected, the process from this point forward becomes quite simple:")]),e._v(" "),a("p",[e._v("A summary of the procedure, starting from the beginning.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Taker requests a swap and sends the "),a("code",[e._v("<dexfee>")]),e._v(" transaction data to Maker.")])]),e._v(" "),a("li",[a("p",[e._v("Maker receives the "),a("code",[e._v("<dexfee>")]),e._v(", verifies it, and sends "),a("code",[e._v("<makerpayment>")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v('Maker generates a "secret", creates a hash of the secret, and shares this hash with Taker')])]),e._v(" "),a("li",[a("p",[e._v("Maker does not send the payment to Taker directly, but rather into a temporary holding address")]),e._v(" "),a("ul",[a("li",[e._v("On "),a("router-link",{attrs:{to:"/basic-docs/start-here/core-technology-discussions/miscellaneous.html#the-utxo-an-elusive-yet-fundamental-concept"}},[e._v("utxo-based")]),e._v(" blockchains, this holding address is a P2SH hash/time locked output")],1),e._v(" "),a("li",[e._v("On ETH/ERC20 based blockchains, this address is an etomic-swap smart contract")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<makerpayment>")]),e._v(" enters a state of limbo on the Maker's coin network, held safely by encryption, awaiting either for Taker to spend the payment, or for the swap to time out")])]),e._v(" "),a("li",[a("p",[e._v("If the latter occurs, "),a("code",[e._v("<makerpayment>")]),e._v(" is automatically refunded to Maker via the AtomicDEX protocol")])])])]),e._v(" "),a("li",[a("p",[e._v("Taker now sends "),a("code",[e._v("<takerpayment>")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Taker does not send the payment to Maker directly, but rather into a temporary holding address")]),e._v(" "),a("ul",[a("li",[e._v("On "),a("router-link",{attrs:{to:"/basic-docs/start-here/core-technology-discussions/miscellaneous.html#the-utxo-an-elusive-yet-fundamental-concept"}},[e._v("utxo-based")]),e._v(" blockchains, this holding address is a P2SH hash/time locked output")],1),e._v(" "),a("li",[e._v("On ETH/ERC20 based blockchains, this address is an etomic-swap smart contract")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<takerpayment>")]),e._v(" enters a state of limbo on the Taker's coin network, held safely by encryption, awaiting either for Maker to spend the payment, or for the swap to time out")])]),e._v(" "),a("li",[a("p",[e._v("If the latter occurs, "),a("code",[e._v("<takerpayment>")]),e._v(" is automatically refunded to Taker via the AtomicDEX protocol")])])])]),e._v(" "),a("li",[a("p",[e._v("Maker now spends the "),a("code",[e._v("<takerpayment>")])]),e._v(" "),a("ul",[a("li",[e._v("To spend the payment Maker reveals the secret")])])]),e._v(" "),a("li",[a("p",[e._v('Taker now "spends" the '),a("code",[e._v("<makerpayment>")])]),e._v(" "),a("ul",[a("li",[e._v("Taker finds that "),a("code",[e._v("<takerpayment>")]),e._v(" is spent and extracts the secret from the spending transaction. The secret can be used to unlock the "),a("code",[e._v("<makerpayment>")]),e._v(" and send the coins to Taker's address")])])])]),e._v(" "),a("p",[e._v('While it may seem inefficient to have five transactions for a swap that could be done with two, the complexity of this process provides us with the requisite "trustless-ness" to maintain user safety.')]),e._v(" "),a("h3",{attrs:{id:"incentives-and-disincentives-to-maintain-good-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incentives-and-disincentives-to-maintain-good-behavior","aria-hidden":"true"}},[e._v("#")]),e._v(" Incentives and Disincentives to Maintain Good Behavior")]),e._v(" "),a("p",[e._v("As we will now explain, at every step along the way there are incentives for each side to proceed, and there are various financial protections in place should one side fail.")]),e._v(" "),a("p",[e._v('Also, because payments are sent to these "temporary holding addresses" that exist within the AtomicDEX protocol, the protocol itself can assist in the process of moving money at the appropriate steps.')]),e._v(" "),a("p",[e._v("Let us now examine what is happening after each step.")]),e._v(" "),a("h4",{attrs:{id:"_1-taker-sends-dexfee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-taker-sends-dexfee","aria-hidden":"true"}},[e._v("#")]),e._v(" 1 - Taker Sends "),a("code",[e._v("<dexfee>")])]),e._v(" "),a("p",[e._v("If Maker accepts the offer to trade, but does not send "),a("code",[e._v("<makerpayment>")]),e._v(", Taker only stands to lose the "),a("code",[e._v("<dexfee>")]),e._v(". This is only 1/777th of the entire transaction amount, so she loses very little.")]),e._v(" "),a("p",[e._v("Maker, on the other hand, stands to lose more. Since Maker did not follow through with his end of the bargain, the AtomicDEX network indicates on his public AtomicDEX trading profile that he failed in a commitment, thus decreasing his profile’s reputation. If Maker continues this behavior as a habit, he may find it difficult to discover trading partners.")]),e._v(" "),a("p",[e._v("So long as the frequency of Makers failing is low, the occasional extra "),a("code",[e._v("<dexfee>")]),e._v(" paid by a Taker is a minor issue. However, if there is a sudden spike in misbehavior, the AtomicDEX code has built-in contingency plans which can provide refunds to Takers.")]),e._v(" "),a("h4",{attrs:{id:"_2-maker-successfully-sends-makerpayment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-maker-successfully-sends-makerpayment","aria-hidden":"true"}},[e._v("#")]),e._v(" 2 - Maker Successfully Sends "),a("code",[e._v("<makerpayment>")])]),e._v(" "),a("p",[e._v("If Taker does not follow with her next step, the "),a("code",[e._v("<takerpayment>")]),e._v(", then Taker loses not only the "),a("code",[e._v("<dexfee>")]),e._v(", but she also receives a mark on her public AtomicDEX profile. She gains nothing, and Maker has no reason to fear as "),a("code",[e._v("<makerpayment>")]),e._v(" will automatically return to him via the AtomicDEX protocol.")]),e._v(" "),a("h4",{attrs:{id:"_3-taker-successfully-sends-takerpayment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-taker-successfully-sends-takerpayment","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 - Taker Successfully Sends "),a("code",[e._v("<takerpayment>")])]),e._v(" "),a("p",[e._v("If Maker does not proceed with his next step (spending the payment), then after lock time expires Taker can simply activate an AtomicDEX protocol that will refund the payment.")]),e._v(" "),a("h4",{attrs:{id:"_4-maker-spends-takerpayment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-maker-spends-takerpayment","aria-hidden":"true"}},[e._v("#")]),e._v(" 4 - Maker Spends "),a("code",[e._v("<takerpayment>")])]),e._v(" "),a("p",[e._v('If Taker does not follow by also "spending" the '),a("code",[e._v("<makerpayment>")]),e._v(", it is of no concern to Maker because he has already received his funds. If Taker is simply sleeping and forgets to spend the "),a("code",[e._v("<makerpayment>")]),e._v(", she can only hurt herself.")]),e._v(" "),a("p",[e._v("Naturally, for Taker this is slightly dangerous. Taker’s best course of action is to remain alert and spend the "),a("code",[e._v("<makerpayment>")]),e._v(" once the "),a("code",[e._v("<takerpayment>")]),e._v(" is spent and the secret is revealed.")]),e._v(" "),a("h4",{attrs:{id:"_5-taker-spends-makerpayment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-taker-spends-makerpayment","aria-hidden":"true"}},[e._v("#")]),e._v(" 5 - Taker Spends "),a("code",[e._v("<makerpayment>")])]),e._v(" "),a("p",[e._v("The process is complete. Taker received the "),a("code",[e._v("<makerpayment>")]),e._v(". Maker received the "),a("code",[e._v("<takerpayment>")]),e._v(". The entire process only cost Taker the original "),a("code",[e._v("<dexfee>")]),e._v(".")]),e._v(" "),a("p",[e._v("At each step along the way, the side that needs to take the next step is motivated to do so, with greater and greater urgency until the process is complete.")]),e._v(" "),a("h2",{attrs:{id:"additional-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional Details")]),e._v(" "),a("h4",{attrs:{id:"always-manage-risk-appropriately"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#always-manage-risk-appropriately","aria-hidden":"true"}},[e._v("#")]),e._v(" Always Manage Risk Appropriately")]),e._v(" "),a("p",[e._v("Naturally, users must understand that outside forces can disable the process and thereby damage one of the users. For instance, an Internet outage for Taker could be particularly dangerous. Therefore, users are advised only to trade manageable sums that they are willing to put at risk, and only with nodes that have reliable reputations.")]),e._v(" "),a("h4",{attrs:{id:"the-connection-is-the-true-challenge-of-an-atomic-swap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-connection-is-the-true-challenge-of-an-atomic-swap","aria-hidden":"true"}},[e._v("#")]),e._v(" The Connection is the True Challenge of an Atomic Swap")]),e._v(" "),a("p",[e._v("Performing a successful connection between Maker and Taker, and verifying their funds, is the most complex and difficult aspect of creating the AtomicDEX network.")]),e._v(" "),a("p",[e._v("Myriad factors are involved in a successful attempt for Maker and Taker to connect: human motivation; the experience level of the users; economics; connection technology; user hardware setups; normal variations within Internet connections; etc.")]),e._v(" "),a("p",[e._v("We emphasize to users here that the process of performing these actions over a peer-to-peer network has almost an artistic element to it. An attempt to successfully connect Maker and Taker can be thought of more like fishing, where we must simply cast and recast our line until we successfully connect with our target.")]),e._v(" "),a("p",[e._v("If a user attempts a trade and no response returns from the network, the user should slightly adjust the parameters of their offer and try again. As AtomicDEX continues to iterate and improve, and as the number of users increases, we expect any required effort to lessen for users, the network, and the AtomicDEX GUI apps.")]),e._v(" "),a("h4",{attrs:{id:"the-dex-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-dex-fee","aria-hidden":"true"}},[e._v("#")]),e._v(" The DEX Fee")]),e._v(" "),a("p",[e._v("People will notice that there is a small "),a("code",[e._v("<dexfee>")]),e._v(" required as part of the AtomicDEX protocol. This is 1/777 of the transaction amount and it is calibrated to make spam attacks impractical. The 1/777 fee is about equal to 0.1287% of the "),a("code",[e._v("<takerpayment>")]),e._v(".")]),e._v(" "),a("p",[e._v("By forcing a would-be attacker to spend real money, attacking the network becomes costly. Without this spam prevention, AtomicDEX could otherwise be attacked at the protocol level by any person performing a plethora of trade requests.")]),e._v(" "),a("p",[e._v("Naturally, some atomic swaps can initiate and then fail to complete, which raises questions about what happens to the "),a("code",[e._v("<dexfee>")]),e._v(" in this scenario. The "),a("code",[e._v("<dexfee>")]),e._v(" is the first charge in the protocol; in this sense, there is a "),a("code",[e._v("<dexfee>")]),e._v(" charged for these failed atomic swaps.")]),e._v(" "),a("p",[e._v("However, this failure should not be looked upon in isolation. The AtomicDEX protocol is based on statistics. Statistically speaking, there will be some percentage of atomic swaps that start and will not complete.")]),e._v(" "),a("p",[e._v("Let us suppose a 15% failure rate at this stage of the atomic swap (15% is three times higher than the rate of failure we currently observe in our testing). Even in this scenario, the effective "),a("code",[e._v("<dexfee>")]),e._v(" cost is still only 0.15% to all Taker-side requests across the entire network.")]),e._v(" "),a("p",[e._v("If you experience the loss of a "),a("code",[e._v("<dexfee>")]),e._v(" transaction for an atomic swap that fails to complete, know that this is all part of the statistical process. If you find yourself paying more than 0.15% of your completed trades in fees, please let us know.")]),e._v(" "),a("p",[e._v("As an organization, when speaking generally to our audience online, we state that the "),a("code",[e._v("<dexfee>")]),e._v(" is just 0.15%. In this manner, we hope to create the expectation that 0.15% is normal; if the network performs perfectly, on the other hand, users will get a blessing in the form of a lower fee, 0.1287%.")]),e._v(" "),a("h4",{attrs:{id:"dealing-with-confirmations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-confirmations","aria-hidden":"true"}},[e._v("#")]),e._v(" Dealing with Confirmations")]),e._v(" "),a("p",[e._v("Since AtomicDEX is trading permanently on blockchains — as opposed to updating an internal database of vouchers — both sides of the trading pair need to wait and watch as miners on the respective blockchains calculate transaction confirmations.")]),e._v(" "),a("p",[e._v("Because the payments that occur on one blockchain will proceed regardless of the actions on the other blockchain — a confirmation failure on one chain will not stop with the other blockchain performing its duties as normal — the AtomicDEX protocol must automatically observe and adjust as necessary.")]),e._v(" "),a("h4",{attrs:{id:"atomicdex-is-entirely-experimental-and-should-be-treated-as-such"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicdex-is-entirely-experimental-and-should-be-treated-as-such","aria-hidden":"true"}},[e._v("#")]),e._v(" AtomicDEX is Entirely Experimental, and Should Be Treated As Such")]),e._v(" "),a("p",[e._v("We warn our readers, nevertheless. Every element of the Komodo ecosystem is still considered to be highly experimental. We provide no investment advice, nor any guarantees of any funds utilized on our network. Use our products only at your own risk.")]),e._v(" "),a("h4",{attrs:{id:"the-atomicdex-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-atomicdex-api","aria-hidden":"true"}},[e._v("#")]),e._v(" The AtomicDEX API")]),e._v(" "),a("p",[e._v("We created an API model that is generally the same for all coins.")]),e._v(" "),a("p",[e._v("For more information, "),a("router-link",{attrs:{to:"/basic-docs/atomicdex/introduction-to-atomicdex.html"}},[e._v("please turn to the AtomicDEX documentation.")])],1)])},[],!1,null,null,null);t.default=o.exports}}]);