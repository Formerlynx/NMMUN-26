import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { animationVariants } from "@/lib/animations";

const FloatingScrollToTopButton = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        // 1. Handle standard scroll visibility (show after 400px)
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // 2. Intersection Observer: Watch the static button at the bottom
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the static button is visible on screen, force the floating one to hide
                if (entry.isIntersecting) {
                    setShowBtn(false);
                }
            },
            { 
                rootMargin: "0px 0px 100px 0px" // Triggers 100px BEFORE the footer button hits the screen for a smoother transition
            }
        );

        // Target the static button by its ID
        const staticBtn = document.getElementById("static-back-to-top");
        if (staticBtn) {
            observer.observe(staticBtn);
        }

        // Cleanup scroll listener and observer
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (staticBtn) observer.unobserve(staticBtn);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            className="relative z-20"
            variants={animationVariants}
            initial="fromBottom"
            animate="visible"
            transition={{ duration: 0.4 }}
        >
            {showBtn && (
                <button
                    className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#F5F5DC] text-black rounded-full p-4 flex items-center gap-2 cursor-pointer duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-110 focus:scale-95 active:scale-100 z-50"
                    onClick={goToTop}
                >
                    <ArrowUp className="w-6 h-6" />{" "}
                    <span className="hidden md:flex">Go Back To Top</span>
                </button>
            )}
        </motion.div>
    );
};

export default FloatingScrollToTopButton;