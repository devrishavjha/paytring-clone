import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Spline script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.29/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
 <a
  href="https://theprint.in/ani-press-releases/global-payment-orchestration-platform-paytring-closes-funding-round-with-unlimit-as-lead-investor/2035324/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-2
    px-3 py-2
    rounded-full
    bg-amber-500/10 text-amber-800
    text-xs sm:text-sm font-medium
    hover:bg-amber-500/20 transition
    max-w-full
    flex-wrap
    leading-snug
  "
>
  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
  <span className="text-center sm:text-left">
    Paytring secures strategic pre-seed funding round led by{" "}
    <span className="font-semibold">Unlimit</span>
  </span>
</a>





            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-display font-bold text-foreground mb-6"
            >
              Payment orchestration platform for{" "}
              <span className="text-gradient-accent">all types of business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body-lg text-muted-foreground mb-8 max-w-xl"
            >
              Universal, feature-rich payment orchestration platform integrating payment
              providers and acquirers into a single unified interface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "45+", label: "Payment Gateways" },
                { value: "100+", label: "Currencies" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Spline 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            ref={splineRef}
          >
            <div className="spline-container rounded-3xl overflow-hidden">
              <spline-viewer
                url="https://prod.spline.design/DIXQbield19xkuLN/scene.splinecode"
                style={{ width: "100%", height: "500px" }}
              />
            </div>

            {/* Floating elements for depth */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

// Declare spline-viewer as a valid JSX element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url: string },
        HTMLElement
      >;
    }
  }
}

