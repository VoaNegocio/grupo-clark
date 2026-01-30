import React from 'react';
import { Home, Sparkles, Wrench, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Identification = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#272823]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center gap-8 mb-12 text-brand-gold perspective-1000">
                            {[
                                { Icon: Home, delay: 0 },
                                { Icon: Sparkles, delay: 0.2 },
                                { Icon: Wrench, delay: 0.4 }
                            ].map(({ Icon, delay }, index) => (
                                <motion.div
                                    key={index}
                                    className="relative preserve-3d cursor-pointer"
                                    animate={{
                                        y: [-10, 10, -10],
                                        rotateX: [5, -5, 5],
                                        rotateY: [5, -5, 5],
                                    }}
                                    transition={{
                                        duration: 4,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        delay: delay
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotateY: 180,
                                        transition: { duration: 0.4 }
                                    }}
                                >
                                    <Icon className="w-12 h-12 drop-shadow-2xl" />
                                    {/* Fake Shadow */}
                                    <motion.div
                                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-2 bg-black/10 blur-md rounded-[100%]"
                                        animate={{ scale: [1, 0.7, 1], opacity: [0.6, 0.3, 0.6] }}
                                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: delay }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                            Se você está pensando em fazer cozinha planejada ou móveis sob medida...
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Mas tem receio de <strong className="text-brand-dark">sujeira, poeira, bagunça ou dor de cabeça</strong> na instalação,
                            o Grupo Clarck é pra você.
                        </p>

                        <motion.div
                            className="inline-block relative overflow-hidden bg-brand-light px-8 py-4 rounded-2xl border border-gray-100 border-b-4 border-b-brand-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.05)] mb-10"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>

                            <p className="text-2xl font-bold text-brand-gold relative z-20">
                                Aqui, sua casa não vira obra.
                            </p>
                        </motion.div>

                        <div className="flex justify-center">
                            <motion.a
                                href="https://wa.me/5521976447015?text=Ol%C3%A1%21%20Vim%20pelo%20Google%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex relative items-center gap-3 bg-gradient-to-r from-brand-green to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(37,211,102,0.4)] overflow-hidden group"
                                whileHover={{ scale: 1.05, shadow: "0 0 30px rgba(37,211,102,0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                    default: { duration: 0.3 }
                                }}
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 w-full" />
                                <MessageCircle className="w-6 h-6 relative z-20" />
                                <span className="relative z-20">Falar com o time do Grupo Clarck</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Identification;
