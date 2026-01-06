import { motion } from "framer-motion";
import { Globe, DollarSign, Shield, Headphones, Rocket, CreditCard, RefreshCw, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Tap into international markets effortlessly. Our system supports transactions in over 100+ currencies, allowing you to reach customers worldwide.",
  },
  {
    icon: DollarSign,
    title: "Reduced Costs",
    description: "Save on international transaction fees with our competitive exchange rates and low-cost payment processing.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "PayTring prioritizes your data with top-tier security and global compliance, including PCI DSS Level 1 certification.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Global Expansion Made Easy",
    description: "Scale your business internationally with seamless cross-border payment solutions.",
  },
  {
    icon: CreditCard,
    title: "Comprehensive Payment Solutions",
    description: "Accept payments in multiple currencies with automatic conversion.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Currency Conversion",
    description: "Dynamic exchange rates with transparent pricing and no hidden fees.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our expert support team is available around the clock to assist you with any issues.",
  },
];

export function CrossBorder() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        {/* Why Choose Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium text-sm mb-4"
          >
            CROSS-BORDER PAYMENTS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-6"
          >
            Why Choose Paytring for Cross-Border Payments?
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="feature-card text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-background rounded-3xl p-8 md:p-12 border border-border/50">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
          >
            Benefits of Cross-Border Payments
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
