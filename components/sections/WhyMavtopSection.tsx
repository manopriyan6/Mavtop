"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  DollarSign,
  Zap,
  Lightbulb,
  Shield,
  Building2,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Maximum Value",
    description:
      "Every rupee you invest delivers measurable returns. We prioritize ROI-driven development and transparent pricing with no hidden costs.",
    color: "var(--brand-blue)",
    gradient: "from-green-900/20",
  },
  {
    icon: Zap,
    title: "Top Performance",
    description:
      "99.9% uptime SLA. Sub-100ms response times. Architectures designed to handle 10× your current load without breaking a sweat.",
    color: "#2563EB",
    gradient: "from-blue-900/20",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We don't build for yesterday. Every project incorporates the latest in AI, cloud-native architecture, and modern development practices.",
    color: "#7C3AED",
    gradient: "from-purple-900/20",
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Security isn't an afterthought — it's baked into every layer. OWASP compliance, data encryption, role-based access, and regular security audits.",
    color: "#059669",
    gradient: "from-emerald-900/20",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "From 10-user startups to 10,000-employee enterprises — our solutions scale with you. Multi-tenant, high-availability architectures as standard.",
    color: "#D97706",
    gradient: "from-amber-900/20",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description:
      "A dedicated support team available round the clock. No escalation hell — you get direct access to senior engineers when it matters.",
    color: "var(--brand-blue)",
    gradient: "from-green-900/20",
  },
];

const checkItems = [
  "Dedicated Project Manager",
  "Agile Development Sprints",
  "Weekly Progress Reports",
  "Source Code Ownership",
  "Post-Launch Support",
  "Knowledge Transfer",
];

export default function WhyMavtopSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-mavtop" className="section-padding relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

      <div
        className="aurora-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)",
          top: "30%",
          left: "-5%",
          animationDelay: "3s",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <CheckCircle2 size={12} />
            Why Mavtop
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-4">
            Not Just a Vendor —{" "}
            <span className="gradient-text-red">A Technology</span>
            <br />
            Partner
          </h2>
          <p className="text-muted font-jakarta text-lg max-w-2xl mx-auto">
            We're invested in your success, not just your project. That's the
            difference between a contractor and a technology partner.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`glass-card rounded-2xl p-7 relative overflow-hidden group cursor-default`}
                style={{ borderColor: `${reason.color}15` }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 20px 50px ${reason.color}15`,
                  borderColor: `${reason.color}30`,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${reason.color}15`,
                      border: `1px solid ${reason.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: reason.color }} />
                  </div>

                  <h3 className="font-grotesk font-bold text-xl text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-jakarta text-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom commitment strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-card rounded-3xl p-8 md:p-10"
          style={{ borderColor: "rgba(34,197,94,0.15)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-2">
                Our Commitment to Every Project
              </h3>
              <p className="text-muted font-jakarta text-sm">
                Standard across all engagements, no matter the size.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-blue flex-shrink-0" />
                  <span className="font-jakarta text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
