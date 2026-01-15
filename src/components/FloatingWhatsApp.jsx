import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/5521976447015?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20meus%20m%C3%B3veis%21"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] md:hidden flex items-center justify-center cursor-pointer hover:bg-[#128C7E] transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.9
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-75"></span>
            <div className="relative">
                <MessageCircle className="w-8 h-8" />
            </div>
        </motion.a>
    );
};

export default FloatingWhatsApp;
