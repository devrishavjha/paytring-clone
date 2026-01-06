import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Smartphone, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Brain,
    title: "Smart Orchestrator",
    description: "An advanced payment orchestration platform, powered by AI and requiring no coding, designed to efficiently handle your business's payment operations.",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Zap,
    title: "Paytring Quick",
    description: "An ultimate ecommerce checkout solution designed to transform your e-commerce experience with lightning-fast processing in just 20 seconds.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Smartphone,
    title: "MPOS / SoftPOS",
    description: "Our omnichannel MPOS and SoftPOS solutions are customized to your business needs, integrated with our payment orchestrator.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: ShoppingCart,
    title: "Order Manager",
    description: "Our order and inventory management system seamlessly integrates with our payment orchestrator for managing orders, inventory, and payments.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: CreditCard,
    title: "Card Recharge Platform",
    description: "Our platform offers seamless recharging of prepaid and forex cards issued by various banks, with a powerful payment collection system.",
    gradient: "from-rose-500/10 to-pink-500/10",
  },
  {
    icon: BarChart3,
    title: "Metered Billing",
    description: "Our metered billing offers a usage-based billing structure, allowing customers to pay only for what they use each month.",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
];

export function ProductSuite() {
  return (
    <section id="products" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium text-sm mb-4"
          >
            PRODUCT SUITE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-6"
          >
            Complete payment solutions for your business
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="feature-card group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-5`}
              >
                <product.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-5">{product.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
              >
                Know More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
