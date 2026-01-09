import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#272823]/5 to-transparent pointer-events-none"></div>
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                        Quer saber quanto fica para o seu projeto?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Fale agora no WhatsApp, tire dúvidas e entenda o próximo passo sem compromisso.
                    </p>

                    <motion.a
                        href="https://wa.me/5521999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20meus%20m%C3%B3veis%21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex relative items-center gap-3 bg-gradient-to-r from-brand-green to-green-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] overflow-hidden group"
                        whileHover={{ scale: 1.05, shadow: "0 0 40px rgba(37,211,102,0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            default: { duration: 0.3 }
                        }}
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 w-full" />

                        <MessageCircle className="w-8 h-8 relative z-20" />
                        <span className="relative z-20">Falar com o time do Grupo Clarck no WhatsApp</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
