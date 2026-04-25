"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { navLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { useTime } from "@/hooks/useTime";

import { Button, Logo, NavLink, NavLinkMenu, Sidebar } from ".";
import { TimerMini } from "../content";

const FloatingNavbar = () => {
	const { isEventHappening, isEventOver } = useTime();
	const [showFloatingNav, setShowFloatingNav] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) setShowFloatingNav(true);
			else setShowFloatingNav(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{showFloatingNav && (
				<motion.nav
					className="p py-4 w-full flex justify-center fixed top-0 left-0 z-50 glass border-b border-white/10"
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					exit={{ y: -100 }}
					transition={{ duration: 0.4, ease: "circOut" }}
				>
					<div className="w-full max-w-7xl flex justify-between items-center gap-6 xl:gap-10">
						{/* LOGO + COUNTDOWN */}
						<div className="flex gap-4 xl:gap-8 items-center flex-shrink-0">
							<Link href="/">
								<Logo w={60} h={60} />
							</Link>
							<TimerMini dark boxClassName="bg-black/20" />
						</div>

						{/* LINKS - Desktop */}
						<div className="hidden xl:flex items-center">
							<ul className="flex gap-4 xl:gap-6 items-center text-white">
								{navLinks.map((link) => {
									if (link.button) {
										return (
											<li key={generateKey()}>
												<Button
													href={link.href}
													animation
													dark
													disabled={isEventOver || isEventHappening}
												>
													{link.title}
												</Button>
											</li>
										);
									} else if (link.menu) {
										return (
											<li key={generateKey()}>
												<NavLinkMenu
													trigger={{
														...link,
													}}
													content={link.children.map((child) => ({
														title: child.title,
														href: child.href,
														img: {
															src: child.icon.src,
															alt: child.icon.alt,
														},
													}))}
													dark
												/>
											</li>
										);
									} else {
										return (
											<li key={generateKey()}>
												<NavLink href={link.href} animation dark>
													{link.title}
												</NavLink>
											</li>
										);
									}
								})}
							</ul>
						</div>

						{/* LINKS - Mobile - SIDEBAR TOGGLE */}
						<Sidebar dark />
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default FloatingNavbar;
