"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = searchTerm.trim();
        if (query) {
            router.push(`/places?search=${encodeURIComponent(query)}`);
        } else {
            router.push("/places");
        }
    };

    return (
        <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                    alt="Beautiful Beach"
                    className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/35 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">

                <motion.h1
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight"
                >
                    Discover Amazing Places
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto"
                >
                    Explore the world's hidden gems and plan your next adventure with ease.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                    className="bg-white/95 p-3 rounded-full shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto"
                >
                    <div className="flex-1 flex items-center border border-gray-200 rounded-full bg-white px-4 py-2 focus-within:ring-2 focus-within:ring-primary/70">
                        <Search className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Search by city, region or experience (e.g., Goa)"
                            className="w-full py-2 text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search destinations"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-to-r from-secondary to-primary text-white font-semibold px-8 py-3 rounded-full hover:opacity-95 transition-shadow shadow-lg"
                    >
                        Search
                    </button>
                </motion.form>

                <p className="text-sm md:text-base text-white/80">
                    Tip: try searching for popular destinations like "Goa", "Himachal", or "Manali".
                </p>
            </div>
        </div>
    );
}
