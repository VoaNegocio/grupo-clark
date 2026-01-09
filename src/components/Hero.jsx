import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Ruler, Calendar, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/hero_bg.webp" />
                    <img
                        src="/images/cozinhaheromobile.webp"
                        alt="Cozinha planejada moderna"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light/95 via-brand-light/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                            Móveis planejados sem <span className="text-brand-green">transformar sua casa em obra</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-900 font-medium mb-6 leading-relaxed">
                            Isolamento real na montagem + projeto 3D + entrega em até 40 dias.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="text-gray-600 font-medium self-center mr-2">Atendemos:</span>
                            {[
                                "Niterói",
                                "Grande Rio",
                                "Região dos Lagos",
                                "Região Serrana"
                            ].map((city, index) => (
                                <div key={index} className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm px-4 py-2 rounded-full text-brand-dark text-sm font-semibold transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5 cursor-default">
                                    <MapPin className="w-4 h-4 text-brand-green" />
                                    {city}
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="https://wa.me/5521999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20sem%20compromisso%21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-brand-green text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: ["0px 10px 15px -3px rgba(37, 211, 102, 0.3)", "0px 10px 25px -3px rgba(37, 211, 102, 0.6)", "0px 10px 15px -3px rgba(37, 211, 102, 0.3)"]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                            <MessageCircle className="w-8 h-8" />
                            <span>Peça seu orçamento pelo WhatsApp</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="absolute bottom-8 left-[40%] md:left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
                <div className="flex flex-col items-center gap-2 text-brand-dark/60">
                    <span className="text-xs font-medium uppercase tracking-widest">Explore</span>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
