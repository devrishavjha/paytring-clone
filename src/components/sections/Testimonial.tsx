import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-accent" />
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8">
            "Paytring has transformed the way we handle payments. Their platform has
            significantly improved our conversion rates and reduced our operational
            costs."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RK</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Rajesh Kumar</div>
              <div className="text-sm text-muted-foreground">
                CEO, TechPay Solutions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
