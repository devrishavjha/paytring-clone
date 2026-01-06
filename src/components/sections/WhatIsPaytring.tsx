import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet, Building2, Globe } from "lucide-react";

const paymentMethods = [
  { icon: CreditCard, label: "Cards" },
  { icon: Smartphone, label: "UPI" },
  { icon: Wallet, label: "Wallets" },
  { icon: Building2, label: "Net Banking" },
  { icon: Globe, label: "International" },
];

export function WhatIsPaytring() {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium text-sm mb-4"
          >
            ABOUT US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-6"
          >
            What is Paytring?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-muted-foreground mb-12"
          >
            Paytring is an all-inclusive payment orchestration platform designed for
            omni businesses and payment institutions, providing unified communication,
            control, and management of all your payment operations.
          </motion.p>
        </div>

        {/* Payment Methods Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <method.icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {method.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
