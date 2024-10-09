"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/60 backdrop-blur-xl border-b border-zinc-500"
        >
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3.5">
                    <Link href="/" className="text-white text-xl font-sf-pro-semi-bold">
                        iPhone 16 Pro
                    </Link>
                    <div className="flex space-x-4 text-xs">
                        <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-sf-pro-regular">
                            Overview
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-sf-pro-regular">
                            Switch from Android to iPhone
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-sf-pro-regular">
                            Tech Specs
                        </Link>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
