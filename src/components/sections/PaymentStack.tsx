import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Layers,
  RefreshCw,
  Settings,
  BarChart3,
  Code,
  CreditCard,
  Repeat,
  Wallet,
  Send,
  Route,
  DollarSign,
  LineChart,
  FileText,
  Webhook,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------- TABS -------------------- */

const tabs = [
  { id: "integrate", label: "Integrate", icon: Layers },
  { id: "omni", label: "Omni Solution", icon: RefreshCw },
  { id: "optimise", label: "Optimise", icon: Settings },
  { id: "manage", label: "Manage", icon: BarChart3 },
  { id: "develop", label: "Develop", icon: Code },
];

/* -------------------- CONTENT -------------------- */

const tabContent = {
  integrate: [
    {
      title: "Payment Providers",
      description:
        "Connect with 45+ payment gateways and aggregators through a single API integration.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      icon: Layers,
    },
    {
      title: "Subscriptions Management",
      description:
        "Automated recurring billing with flexible plans and smart dunning management.",
      gradient: "from-purple-500/10 to-pink-500/10",
      icon: Repeat,
    },
    {
      title: "Payment Methods",
      description:
        "Support for UPI, cards, wallets, net banking, and alternative payment methods.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      icon: Wallet,
    },
    {
      title: "Payouts",
      description:
        "Fast, secure payouts with real-time tracking and automated reconciliation.",
      gradient: "from-amber-500/10 to-orange-500/10",
      icon: Send,
    },
  ],

  omni: [
    {
      title: "Omnichannel Payments",
      description:
        "Accept payments across web, mobile, in-store, and APIs with a unified flow.",
      gradient: "from-cyan-500/10 to-blue-500/10",
      icon: CreditCard,
    },
    {
      title: "POS Integration",
      description:
        "Seamless POS and SoftPOS integration powered by our orchestration engine.",
      gradient: "from-rose-500/10 to-red-500/10",
      icon: Layers,
    },
  ],

  optimise: [
    {
      title: "Smart Routing",
      description:
        "AI-powered routing to maximize success rates and reduce transaction failures.",
      gradient: "from-violet-500/10 to-purple-500/10",
      icon: Route,
    },
    {
      title: "Cost Optimization",
      description:
        "Reduce MDR costs using dynamic routing across multiple payment providers.",
      gradient: "from-green-500/10 to-emerald-500/10",
      icon: DollarSign,
    },
  ],

  manage: [
    {
      title: "Analytics Dashboard",
      description:
        "Real-time insights, KPIs, and advanced reports for payment operations.",
      gradient: "from-sky-500/10 to-cyan-500/10",
      icon: LineChart,
    },
    {
      title: "Reconciliation",
      description:
        "Automated reconciliation with detailed transaction-level matching.",
      gradient: "from-fuchsia-500/10 to-pink-500/10",
      icon: FileText,
    },
  ],

  develop: [
    {
      title: "APIs & SDKs",
      description:
        "Developer-first APIs and SDKs to build and scale payment products faster.",
      gradient: "from-indigo-500/10 to-violet-500/10",
      icon: Code,
    },
    {
      title: "Webhooks",
      description:
        "Instant event notifications for payments, refunds, settlements, and more.",
      gradient: "from-teal-500/10 to-green-500/10",
      icon: Webhook,
    },
  ],
};

/* -------------------- COMPONENT -------------------- */

export function PaymentStack() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("integrate");

  return (
    <section className="w-screen bg-muted/30 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADING ---------- */}
        <div className="text-center mb-14">
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
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Everything you need to manage payments
          </motion.h2>
        </div>

        {/* ---------- TABS ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:bg-muted border border-border"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ---------- CONTENT ---------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {tabContent[activeTab].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition"
              >
                {/* ICON */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br mb-4 flex items-center justify-center",
                    item.gradient
                  )}
                >
                  <item.icon className="w-6 h-6 text-foreground/80 group-hover:text-foreground transition" />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>

                {/* LINK */}
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
