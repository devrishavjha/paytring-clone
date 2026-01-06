import { motion } from "framer-motion";
import { Shield, Unlock, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "DDoS Protected Infrastructure",
    description:
      "Enterprise-grade security with multi-layered DDoS protection ensuring 99.9% uptime for your payment operations.",
  },
  {
    icon: Unlock,
    title: "Vendor Lock-in Avoidance",
    description:
      "Freedom to switch payment providers without code changes. Never be tied to a single vendor again.",
  },
  {
    icon: BarChart3,
    title: "Real-time Control & Analytics",
    description:
      "Comprehensive dashboards with real-time insights into your payment performance and operations.",
  },
];

export function PlatformValue() {
  return (
    <section className="w-screen bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADING ---------- */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Payment Orchestration Platform For All
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Enterprise-grade infrastructure built for scale and reliability
          </motion.p>
        </div>

        {/* ---------- CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-7 h-7 text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
