import Head from "next/head";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import RoadmapSection from "../components/RoadmapSection";
import SponsorsSection from "../components/SponsorsSection";
// import TestimonialSection from '../components/TestimonialSection'
import VideoSection from "../components/VideoSection";

export default function Home() {
   return (
      <>
         <Head>
            <title>BlackWater</title>

            <meta data-n-head="1" charSet="utf-8" />
            <meta
               data-n-head="1"
               data-hid="description"
               name="description"
               content="Mine the Future of Money"
            />
            <meta
               data-n-head="1"
               data-hid="author"
               name="author"
               content="https://blackwater.co/"
            />
            <meta
               data-n-head="1"
               data-hid="publisher"
               name="publisher"
               content="https://blackwater.co/"
            />
            <meta
               data-n-head="1"
               data-hid="apple-mobile-web-app-title"
               name="apple-mobile-web-app-title"
               content="BlackWater"
            />
            <meta
               data-n-head="1"
               data-hid="theme-color"
               name="theme-color"
               content="#000000"
            />
            <meta
               data-n-head="1"
               data-hid="og:title"
               name="og:title"
               content="BlackWater"
            />
            <meta
               data-n-head="1"
               data-hid="og:description"
               name="og:description"
               content="Mine the Future of Money"
            />
            <meta
               data-n-head="1"
               data-hid="og:type"
               name="og:type"
               content="website"
            />
            <meta
               data-n-head="1"
               data-hid="og:url"
               name="og:url"
               content="https://blackwater.co/"
            />
            <meta
               data-n-head="1"
               data-hid="og:image"
               name="og:image"
               content="https://i.ibb.co/CKHwPWX/banner.png"
            />
            <meta
               data-n-head="1"
               data-hid="og:locale"
               name="og:locale"
               content="en_US"
            />
            <meta
               data-n-head="1"
               data-hid="og:site_name"
               name="og:site_name"
               content="BlackWater"
            />

            <meta
               data-n-head="1"
               data-hid="twitter:card"
               name="twitter:card"
               content="summary_large_image"
            />
            <meta
               data-n-head="1"
               data-hid="twitter:site"
               name="twitter:site"
               content="@blackwater"
            />
            <meta
               data-n-head="1"
               data-hid="twitter:creator"
               name="twitter:creator"
               content="@blackwater"
            />
            <meta
               data-n-head="1"
               data-hid="twitter:title"
               name="twitter:title"
               content="BlackWater"
            />
            <meta
               data-n-head="1"
               data-hid="twitter:description"
               name="twitter:description"
               content="Mine the Future of Money"
            />
            <meta
               data-n-head="1"
               data-hid="twitter:image"
               name="twitter:image"
               content="https://i.ibb.co/CKHwPWX/banner.png"
            />
         </Head>
         <Header />
         <main className="overflow-x-hidden">
            <HeroSection />
            <VideoSection />
            <RoadmapSection />
            <PricingSection />
            {/* <TestimonialSection /> */}
            <FaqSection />
            <GetStarted src="/img/getstartedminers_bg.webp" />
         </main>
         <Footer />
      </>
   );
}
