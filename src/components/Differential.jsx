import React from 'react';
import { motion } from 'framer-motion';

const Differential = () => {
    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-green/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">
                            Nosso Principal Diferencial
                        </span>
                        <h2 className="text-4xl text-brand-light md:text-5xl font-heading font-bold mb-6">
                            Isolamento real do ambiente durante a montagem.
                        </h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Não é promessa. É preparo, proteção e cuidado antes de instalar qualquer móvel.
                            Nós cobrimos tudo para garantir que sua casa continue impecável.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                                <span>Proteção de pisos e móveis existentes</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                                <span>Barreira contra poeira</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                                <span>Limpeza pós-obra garantida</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <img
                                src="/images/isolation2.webp"
                                alt="Ambiente protegido para instalação"
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                                <p className="text-sm font-semibold text-white flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    Processo Padrão Grupo Clarck
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Differential;
