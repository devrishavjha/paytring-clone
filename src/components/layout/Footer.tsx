import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Payment Gateways", href: "#" },
  ],
  resources: [
    { label: "Blogs", href: "#blogs" },
    { label: "Career", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cancellation & Refund", href: "#" },
  ],
};

const complianceLogos = [
  "AWS",
  "PCI DSS",
  "VISA",
  "Mastercard",
  "Cloudflare",
  "GPay",
  "ISO 27001",
];

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">Paytring</span>
            </a>
            <p className="text-primary-foreground/70 text-body max-w-md mb-8">
              Our mission is to simplify and streamline the payment experience for
              businesses of all sizes. We are committed to providing innovative,
              secure, and reliable payment solutions that help our customers grow and
              succeed.
            </p>
            <div className="flex items-center gap-4">
              {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-primary-foreground/60 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Logos */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {complianceLogos.map((logo) => (
              <div
                key={logo}
                className="px-4 py-2 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <span className="text-xs font-medium text-primary-foreground/60">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Paytring. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
