import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, RefreshCw, Settings, BarChart3, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "integrate", label: "Integrate", icon: Layers },
  { id: "omni", label: "Omni Solution", icon: RefreshCw },
  { id: "optimise", label: "Optimise", icon: Settings },
  { id: "manage", label: "Manage", icon: BarChart3 },
  { id: "develop", label: "Develop", icon: Code },
];

const tabContent = {
  integrate: [
    {
      title: "Payment Providers",
      description: "Connect with 45+ payment gateways and aggregators through a single API integration.",
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Subscriptions Management",
      description: "Automated recurring billing with flexible plans and smart dunning management.",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Payment Methods",
      description: "Support for all major payment methods including UPI, cards, wallets, and net banking.",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Payouts",
      description: "Streamlined disbursements with real-time tracking and reconciliation.",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
  ],
  omni: [
    {
      title: "Omnichannel Payments",
      description: "Accept payments across all channels - online, in-store, and mobile with unified experience.",
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "POS Integration",
      description: "Seamless point-of-sale integration with our payment orchestrator.",
      gradient: "from-rose-500/10 to-red-500/10",
    },
  ],
  optimise: [
    {
      title: "Smart Routing",
      description: "AI-powered intelligent routing to maximize success rates and minimize costs.",
      gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      title: "Cost Optimization",
      description: "Reduce MDR costs with dynamic routing across payment providers.",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ],
  manage: [
    {
      title: "Analytics Dashboard",
      description: "Real-time insights and comprehensive reporting for all payment operations.",
      gradient: "from-sky-500/10 to-cyan-500/10",
    },
    {
      title: "Reconciliation",
      description: "Automated reconciliation with detailed transaction matching.",
      gradient: "from-fuchsia-500/10 to-pink-500/10",
    },
  ],
  develop: [
    {
      title: "APIs & SDKs",
      description: "Developer-friendly APIs and SDKs for seamless integration.",
      gradient: "from-indigo-500/10 to-violet-500/10",
    },
    {
      title: "Webhooks",
      description: "Real-time event notifications for all payment events.",
      gradient: "from-teal-500/10 to-green-500/10",
    },
  ],
};

export function PaymentStack() {
  const [activeTab, setActiveTab] = useState("integrate");

  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium text-sm mb-4"
          >
            FULL PAYMENT STACK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-6"
          >
            Everything you need to manage payments
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {tabContent[activeTab as keyof typeof tabContent].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="feature-card group"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br mb-4 flex items-center justify-center",
                    item.gradient
                  )}
                >
                  <div className="w-6 h-6 rounded-md bg-accent/20" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
