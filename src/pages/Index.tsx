import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatIsPaytring } from "@/components/sections/WhatIsPaytring";
import { PaymentStack } from "@/components/sections/PaymentStack";
import { WhyPaytring } from "@/components/sections/WhyPaytring";
import { CrossBorder } from "@/components/sections/CrossBorder";
import { ProductSuite } from "@/components/sections/ProductSuite";
import { PlatformValue } from "@/components/sections/PlatformValue";
import { Testimonial } from "@/components/sections/Testimonial";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTAStrip } from "@/components/sections/CTAStrip";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhatIsPaytring />
        <PaymentStack />
        <WhyPaytring />
        <CrossBorder />
        <ProductSuite />
        <PlatformValue />
        <Testimonial />
        <Newsletter />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
