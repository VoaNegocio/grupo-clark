import React from 'react';

import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const SecondaryDifferentials = () => {
    const benefits = [
        "Entrega em até 40 dias",
        "Projeto 3D antes de produzir",
        "Pagamento facilitado no cartão",
        "Honestidade e transparência em todo o processo",
        "Atendimento regional especializado"
    ];

    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Decorative gradient */}
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#272823] to-transparent pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
                        Por que escolher o Grupo Clarck
                    </h2>

                    <ul className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 transition-all hover:translate-x-2 hover:bg-white/10 hover:border-brand-gold/30"
                            >
                                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <span className="text-lg text-gray-100 font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 flex justify-center">
                        <motion.a
                            href="https://wa.me/5521976447015?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20meus%20m%C3%B3veis%21"
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
                </div>
            </div>
        </section>
    );
};

export default SecondaryDifferentials;
