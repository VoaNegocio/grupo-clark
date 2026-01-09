import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 py-2 md:py-3 transition-all duration-300 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    {/* Logo */}
                    <motion.div
                        className="w-20 md:w-28 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/logo/logo.webp"
                            alt="Grupo Clarck Logo"
                            className="w-full h-auto drop-shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
