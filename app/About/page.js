"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const horizonGradient = {
    background: "linear-gradient(135deg, #0077b6 0%, #006d3d 100%)",
};

function Icon({ name, filled = false, className = "" }) {
    const variationSettings = filled
        ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
        : {};
    return (
        <span
            className={`material-symbols-outlined leading-none ${className}`}
            style={variationSettings}
        >
            {name}
        </span>
    );
}

const FEATURES = [
    {
        icon: "search",
        iconBg: "bg-[#94ccff]",
        iconColor: "text-[#005d90]",
        title: "Precision Search",
        desc: "Navigate through thousands of destinations with an intelligent search designed for depth and speed.",
    },
    {
        icon: "auto_awesome",
        iconBg: "bg-[#97f3b5]",
        iconColor: "text-[#047240]",
        title: "Curated Places",
        desc: "Editorial selections from local experts, focusing on authentic experiences that avoid the tourist traps.",
    },
    {
        icon: "group_add",
        iconBg: "bg-[#ffdcc0]",
        iconColor: "text-[#864a00]",
        title: "User-Submitted",
        desc: "Join our community of ethereal navigators by sharing your own secret spots and hidden retreats.",
    },
];

const STEPS = [
    {
        num: 1,
        title: "Select Intent",
        desc: "Tell us your mood—whether it's oceanic depth or forest tranquility, we frame the starting point.",
        padding: "md:pr-8",
    },
    {
        num: 2,
        title: "Filter Beauty",
        desc: "Use our curated discovery chips to narrow down by activity, climate, or cultural resonance.",
        padding: "md:px-8",
    },
    {
        num: 3,
        title: "Begin Discovery",
        desc: "Lock in your itinerary and export your guide to any device for an uninterrupted expedition.",
        padding: "md:pl-8",
    },
];

const BOTTOM_NAV = [
    { icon: "home", label: "Home" },
    { icon: "search", label: "Search" },
    { icon: "explore", label: "My Trips" },
    { icon: "person", label: "Profile" },
];

export default function About() {
    const [_menuOpen, setMenuOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="bg-[#f4faff] text-[#141d21] antialiased font-['Be_Vietnam_Pro',sans-serif]">

            <main className="pt-20">

                {/* ── Hero ───────────────────────────────────────────────── */}
                <section className="relative w-full h-[614px] flex items-center overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCccnEtZ8kWO8mAnrIaG13UeOfTGWbiMVTV17__9wr2bhQ1lrI79A4afJqW-E09sgCX3gtbUAH3WX9zf7h0HLcJe9XrG8I5EhZH7fcw5sSIZFm26YVkwscotowsel8OjsCl3J-LK4gBf4bu1gHp6relttBOQM8mOzU8v4eyhvvFeDlOomGR6oJbohlfL7rKPK21OG6CTdRujvq2Ha3Ixqylh_ILj_OYrYy-7AtlMyjr_xJyvFeIkJJaTXiRGJVMHotYpLCWd4ZMzoWU"
                            alt="Aerial view of a coastal mountain road at golden hour"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-[#141d21]/30 brightness-75" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white leading-tight mb-6"
                                variants={itemVariants}
                            >
                                Discover Amazing Places
                            </motion.h1>
                            <motion.p
                                className="text-xl text-white/90 mb-8 max-w-lg"
                                variants={itemVariants}
                            >
                                The Ethereal Navigator for the modern traveler. Uncover hidden gems and
                                curate your next masterpiece of a journey.
                            </motion.p>
                            <motion.button
                                style={horizonGradient}
                                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-all hover:shadow-xl"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore destinations
                                <Icon name="arrow_forward" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* ── Mission ────────────────────────────────────────────── */}
                <section className="py-24 bg-[#f4faff]">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">

                        {/* Text */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                        >
                            <span className="text-[#006d3d] font-bold font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-widest text-sm mb-4 block">
                                Our North Star
                            </span>
                            <h2 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#141d21] mb-8 leading-tight">
                                Elevating the way the world moves.
                            </h2>
                            <p className="text-lg text-[#404850] leading-relaxed mb-6">
                                We believe that travel shouldn't be a transaction; it should be an editorial
                                experience. TouristGuide is designed to frame the world's beauty through a
                                lens of clarity and sophistication.
                            </p>
                            <p className="text-lg text-[#404850] leading-relaxed">
                                By blending curated local insights with an intuitive interface, we empower
                                adventurers to transition from shoreline to summit with seamless grace.
                            </p>
                        </motion.div>

                        {/* Image + quote */}
                        <motion.div
                            className="w-full md:w-1/2 relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                        >
                            <motion.div
                                className="aspect-square rounded-[2rem] overflow-hidden shadow-xl"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCF4gZjW88Cxt9nW803SSkP4iw-ZmWIk78OdpgXN8YqCTVjDs6Mo251YkAUvjmThTS9XPAFizvCZFFmvWONvUB-cPi0Cx9kS6CxxT_OdcTedkp8DD2Rw_i9svR1LX8p3uQNrmRUfimr79WPCD1Nwq1rDp8ImzltkHQprj7D4JNOa_KnbMAlcpNp0_aV4eKoQRiPTyncFpf8TqCM_qy4k4paVood3NlpSZPhRlRZb_tfXU7zisTP3xQ0RDUefVkY39vNZTNYq46FNcK"
                                    alt="Antique compass on a map with a camera"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#005d90] text-xl italic leading-snug">
                                    "The interface frames the journey, but the discovery is yours."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Features ───────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-b from-[#ecf5fb] to-[#f4faff]">
                    <div className="max-w-7xl mx-auto px-8">
                        <motion.h2
                            className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#141d21] text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Crafted Features
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {FEATURES.map((f) => (
                                <motion.div
                                    key={f.title}
                                    className="bg-white p-8 rounded-2xl shadow-[0_8px_24px_rgba(0,93,144,0.06)] border border-[#e0e9ef]/50 hover:border-[#005d90]/30"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 20px 40px rgba(0,93,144,0.12)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon name={f.icon} className={`${f.iconColor} text-3xl`} />
                                    </motion.div>
                                    <h3 className="text-xl font-['Plus_Jakarta_Sans',sans-serif] font-bold mb-4 text-[#141d21]">
                                        {f.title}
                                    </h3>
                                    <p className="text-[#404850] leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Journey Map ────────────────────────────────────────── */}
                <section className="py-24 bg-[#f4faff] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-8">
                        <motion.h2
                            className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#141d21] mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            The Journey Map
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
                            {/* Connector line */}
                            <motion.div
                                className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-[#005d90]/20 via-[#005d90]/50 to-[#005d90]/20 z-0"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{ originX: 0 }}
                            />

                            {STEPS.map((s, idx) => (
                                <motion.div
                                    key={s.num}
                                    className={`relative z-10 pb-12 ${s.padding}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                >
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-[#e0e9ef] border-4 border-[#005d90] flex items-center justify-center text-2xl font-bold text-[#005d90] mb-8 shadow-lg font-['Plus_Jakarta_Sans',sans-serif]"
                                        whileHover={{ scale: 1.15, boxShadow: "0 20px 40px rgba(0,93,144,0.3)" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {s.num}
                                    </motion.div>
                                    <h4 className="text-2xl font-['Plus_Jakarta_Sans',sans-serif] font-bold mb-4 text-[#141d21]">
                                        {s.title}
                                    </h4>
                                    <p className="text-[#404850] leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Stats ──────────────────────────────────────────────── */}
                <section className="py-12 bg-gradient-to-r from-[#e0e9ef] via-[#ecf5fb] to-[#e0e9ef]">
                    <div className="max-w-7xl mx-auto px-8">
                        <motion.div
                            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >

                            <motion.div className="flex items-center gap-3" variants={itemVariants}>
                                <span className="text-2xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#005d90]">
                                    10k+
                                </span>
                                <span className="text-[#404850] font-medium">Loved by Travelers</span>
                            </motion.div>

                            <motion.div className="hidden md:block h-8 w-px bg-[#bfc7d1]" variants={itemVariants} />

                            <motion.div className="flex items-center gap-2" variants={itemVariants}>
                                <Icon name="star" filled className="text-[#006d3d]" />
                                <span className="text-[#404850] font-medium">4.9/5 Rating</span>
                            </motion.div>

                            <motion.div className="hidden md:block h-8 w-px bg-[#bfc7d1]" variants={itemVariants} />

                            <motion.div className="flex items-center gap-3" variants={itemVariants}>
                                <span className="text-2xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#005d90]">
                                    500+
                                </span>
                                <span className="text-[#404850] font-medium">Hidden Gems</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA ────────────────────────────────────────────────── */}
                <section className="py-24 bg-[#f4faff] relative overflow-hidden">
                    {/* Decorative blobs */}
                    <motion.div
                        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#005d90]/5 rounded-full blur-3xl"
                        animate={{
                            y: [0, 20, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute -top-24 -left-24 w-96 h-96 bg-[#006d3d]/5 rounded-full blur-3xl"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    />

                    <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                        <motion.h2
                            className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#141d21] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to navigate the ethereal?
                        </motion.h2>
                        <motion.p
                            className="text-xl text-[#404850] mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Join the community of travelers who value the perspective as much as the
                            destination.
                        </motion.p>
                        <motion.div
                            className="flex flex-col md:flex-row justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.button
                                style={horizonGradient}
                                className="text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all"
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,109,61,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore destinations
                            </motion.button>
                            <motion.button
                                className="bg-white border-2 border-[#005d90] text-[#005d90] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ecf5fb] transition-colors active:scale-95"
                                whileHover={{ scale: 1.05, backgroundColor: "#ecf5fb" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Share a place
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <motion.footer
                className="bg-[#f4faff] w-full py-12 border-t border-[#005d90]/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-6">
                    <div className="text-lg font-bold text-[#005d90] font-['Plus_Jakarta_Sans',sans-serif]">
                        TouristGuide
                    </div>
                    <motion.div
                        className="flex flex-wrap justify-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {["Privacy Policy", "Terms of Service", "Contact Us", "Partner with Us"].map(
                            (link) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    className="text-sm text-[#141d21]/60 hover:text-[#005d90] transition-colors"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {link}
                                </motion.a>
                            )
                        )}
                    </motion.div>
                    <p className="text-sm text-[#141d21]/60">
                        © 2024 TouristGuide. The Ethereal Navigator.
                    </p>
                </div>
            </motion.footer>

            {/* ── Mobile Bottom Nav ──────────────────────────────────── */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-6 pt-3 md:hidden bg-white/80 backdrop-blur-xl shadow-[0_-8px_24px_rgba(0,93,144,0.06)] rounded-t-3xl z-50">
                {BOTTOM_NAV.map((item) => (
                    <motion.a
                        key={item.label}
                        href="#"
                        className="flex flex-col items-center justify-center text-[#141d21]/50 hover:text-[#005d90] px-4 py-1.5 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon name={item.icon} />
                        <span className="text-[11px] font-medium mt-0.5">{item.label}</span>
                    </motion.a>
                ))}
            </nav>
        </div>
    );
}
