import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
                </div>
            </div>
        </section>
    );
};

export default SecondaryDifferentials;
