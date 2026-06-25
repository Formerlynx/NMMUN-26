"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Ensure loader shows for at least 2 seconds
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{loading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
				>
					<div className="relative flex items-center justify-center">
						{/* GIF container */}
						<div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
							<Image 
								src="/loading.gif" 
								alt="Loading..." 
								fill
								className="w-full h-full object-contain"
								onError={(e) => {
									// Fallback if gif is missing: simple CSS pulse
									e.currentTarget.style.display = 'none';
									const fallback = e.currentTarget.parentElement?.querySelector('.fallback-spinner');
									if (fallback) (fallback as HTMLElement).style.display = 'block';
								}}
							/>
							<div className="fallback-spinner hidden w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
						</div>
					</div>
					
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						transition={{ delay: 0.5 }}
						className="mt-4 text-sm font-sans text-gray-500 tracking-widest uppercase"
					>
						Loading NMMUN 2026
					</motion.h2>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default LoadingScreen;
