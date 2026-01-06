import { motion } from "framer-motion";

const partners = [
  { name: "PhonePe", logo: "P" },
  { name: "PayTabs", logo: "PT" },
  { name: "Gate2Pay", logo: "G2P" },
  { name: "CoinGate", logo: "CG" },
  { name: "Cashfree", logo: "CF" },
  { name: "ICICI Bank", logo: "ICICI" },
  { name: "Rapyd", logo: "R" },
  { name: "CCAvenue", logo: "CC" },
];

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by leading payment providers worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 logo-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 px-6 rounded-lg bg-background border border-border/50 trust-strip cursor-default"
              >
                <span className="font-semibold text-muted-foreground text-sm whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
