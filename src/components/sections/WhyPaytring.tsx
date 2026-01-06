import { motion } from "framer-motion";
import { Zap, DollarSign, TrendingUp, Scale } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Effortless Integration",
    description:
      "Seamlessly integrate with our software development kits (SDKs) and extensions, without the need for complex coding or customization.",
  },
  {
    icon: DollarSign,
    title: "Cost and Revenue Optimization",
    description:
      "Reduce MDR costs with competitive rates from 20+ payment gateways and aggregators.",
  },
  {
    icon: TrendingUp,
    title: "Better Conversions",
    description:
      "Lower your failure rate using dynamic rules and AI-powered intelligent routing.",
  },
  {
    icon: Scale,
    title: "Infinite Scalability",
    description:
      "Integrate with us once and gain access to 45+ payment gateways, with optimal performance, security, and reliability.",
  },
];

export function WhyPaytring() {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-medium text-sm mb-4"
            >
              WHY PAYTRING?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-6"
            >
              Achieve faster and more secure transactions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-muted-foreground"
            >
              Improve payment success rates and enhanced control over payment-related
              data and analytics by streamlining your payment processes with us.
            </motion.p>
          </div>

          {/* Right Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-body-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
