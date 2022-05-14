import { useState } from "react";
import Collapsible from "react-collapsible";
import React, { useEffect } from "react";
import AOS from "aos";

const faqs = [
   {
      title: "What is cryptocurrency and how does cryptocurrency work?",
      description:
         "Cryptocurrency is a computer-generated monetary system. It is created by powerful computers called “miners,” which compete mathematically to secure “transactions.” The transactions are bundled into a “block,” which the cryptocurrency miner digitally verifies to assure the validity of all transactions. The miner computes a “cryptographic hash,” a computerized method to ensure the block’s validity and prevent invalid block construction. Blocks are accumulated and accounted for in the blockchain, functioning as digital ledgers. Miners are rewarded for their transactions with a set amount of cryptocurrency.",
   },
   {
      title: "What are the long-term projections for cryptocurrency?",
      description:
         "Cryptocurrency is still in its relative infancy but has come a long way since the Bitcoin network first launched in 2009. Mainstream adoption of cryptocurrency and blockchain applications have been growing at a remarkable rate in recent years and months, which ultimately bodes well for the long-term outlook of digital assets. Many forms of cryptocurrency – including bitcoin and Ethereum – experienced all-time price highs in early 2021, which many experts state is a good thing for the future. Bitcoin has begun to be seen as a welcome alternative asset class in investment portfolios, particularly as a hedge against risk similar to the role gold has played for decades. Still, it’s important to acknowledge that we’re in the early stages of crypto, which lends itself to both opportunity and volatility. While the long-term outlook is largely positive, miners, investors, and newcomers should keep this volatility in mind when ramping up operations.",
   },
   {
      title: "How much does BlackWater services cost?",
      description:
         "There are three main costs to consider when mining with BlackWater – the cost of your hardware, membership fee, and the hosting fee. Membership cost and Hardware cost is a one-time expense incurred at the time of purchase that varies based on the quantity and quality of your equipment. The hosting fee is paid to the colocation facility and varies from one provider to the next, often based on the space, expected wattage of your mining equipment, and services selected. ",
   },
   {
      title: "What is proof-of-work?",
      description:
         "Proof-of-work is a consensus algorithm used in many forms of cryptocurrency, including Bitcoin, Ethereum, Zcash, and others. Within the proof-of-work protocol, miners compete to solve a complicated mathematical puzzle in order to add transactions to the blockchain. A new block is added to the blockchain each time this puzzle is solved, and the miner is then rewarded with the current block reward and any transaction fees included in the block.",
   },
   {
      title: "Is cryptocurrency taxed?",
      description:
         "Different jurisdictions have different regulations regarding payrolls, income, sales, capital gains, and other aspects involving cryptocurrency and taxes. Investors are responsible for reporting and dealing with taxes in their local jurisdiction.",
   },
];

function FaqSection() {
   return (
      <section className="mt-[60px] md:mt-[144px]">
         <div className="container">
            <div className="text-center overflow-hidden">
               <h2 className="title_md">Frequently Asked Question</h2>
               <p className="subtitle_md lg:w-[600px] mx-auto mt-3.5">
                  Whether you are new to cryptocurrency or a seasoned veteran
                  looking to maximize your investment, we are here to help you
                  get started and rapidly scale your operations.
               </p>
            </div>

            <div>
               <div className="overflow-hidden mt-[56px] space-y-5">
                  {faqs.map((faq, i) => (
                     <FaqAccordion
                        title={faq.title}
                        description={faq.description}
                        key={i}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default FaqSection;

const FaqAccordion = ({ title, description, ...rest }) => {
   const [isOpen, setisOpen] = useState(false);
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div {...rest} data-aos="fade-up" data-aos-duration="1000">
         <Collapsible
            transitionTime={200}
            openedClassName="currently_open"
            trigger={
               <div
                  className={`flex subtitle_md  items-center justify-between px-5 lg:px-[74px] py-5 lg:py-[30px] border rounded-[20px] lg:rounded-[30px] duration-200 ${
                     isOpen
                        ? "!text-white font-lufga-bold border-[#0C0A11]"
                        : "font-lufga-regular border-gray/25"
                  }`}
               >
                  <p className="text-lg pr-6">{title}</p>
                  <div
                     className={`${
                        isOpen ? "rotate-180" : ""
                     } duration-200 shrink-0`}
                  >
                     <DownIcon fill={isOpen ? "#ffffff" : undefined} />
                  </div>
               </div>
            }
            onOpening={() => setisOpen(true)}
            onClosing={() => setisOpen(false)}
         >
            <p className={`subtitle_sm px-5 lg:px-[74px] pb-11 pt-0`}>
               {description}
            </p>
         </Collapsible>
      </div>
   );
};

const DownIcon = ({ fill = "#A3A5C1" }) => {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M14 7.40607C14 6.52007 13.0127 5.9914 12.2753 6.48274L8 9.33341L3.72467 6.4834C2.98733 5.99207 2 6.52007 2 7.40607C2 7.77674 2.18533 8.12341 2.494 8.32941L7.26067 11.5067C7.70867 11.8054 8.292 11.8054 8.74 11.5067L13.5067 8.32941C13.8147 8.12341 14 7.7774 14 7.40607Z"
            fill={fill}
         />
      </svg>
   );
};
