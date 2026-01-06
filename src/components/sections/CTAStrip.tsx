import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="section-tight bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary to-accent p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Are you ready to take your business to the next level?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl">
                Join thousands of businesses already using Paytring for seamless payment orchestration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl group"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
