import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="blogs" className="section-tight bg-accent-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-accent" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get started with our comprehensive payment solution
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay informed about our latest features and updates. Get tips on how to
            achieve faster and more secure transactions, optimize costs, and improve
            payment success rates.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-accent"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-xl border-border bg-background"
                required
              />
              <Button type="submit" variant="accent" size="lg" className="rounded-xl">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to receive our marketing and promotional emails.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
