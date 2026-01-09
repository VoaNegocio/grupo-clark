import React from 'react';
import { Home, Sparkles, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Identification = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center gap-8 mb-12 text-brand-green/80 perspective-1000">
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
                            className="inline-block relative overflow-hidden bg-brand-light px-8 py-4 rounded-2xl border border-gray-100 border-b-4 border-b-brand-green/20 shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>

                            <p className="text-2xl font-bold text-brand-green relative z-20">
                                Aqui, sua casa não vira obra.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Identification;
