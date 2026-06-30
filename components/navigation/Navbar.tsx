"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

import { navLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { animationVariants, animation } from "@/lib/animations";

import { useTime } from "@/hooks/useTime";

import { Button, Logo, NavLink, NavLinkMenu, Sidebar } from ".";
import { TimerMini } from "../content";


interface Props {
	dark?: boolean;
	delay?: number;
}


const Navbar = ({ delay, dark }: Props) => {

	const { isEventHappening, isEventOver } = useTime();

	const [scrolled, setScrolled] = useState(false);


	const { scrollY } = useScroll();


	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 80);
	});


	return (

		<motion.nav

			className={clsx(
				"fixed top-5 left-0 w-full z-[50] flex justify-center px-4",

				dark && "text-white"
			)}

			variants={animationVariants}

			{...animation("fromTop", {
				delay
			})}


			whileInView={{
				scale: scrolled ? 0.97 : 1
			}}

			transition={{
				duration:0.3
			}}

		>


			<div

				className={clsx(

					"w-full max-w-8xl",

					"flex justify-between items-center",

					"gap-6 xl:gap-10",

					"rounded-3xl",

					"px-6 py-3",

					"border",

					"transition-all duration-300",


					scrolled

					?

					"bg-white/85 backdrop-blur-xl shadow-xl border-black/5"

					:

					"bg-white/40 backdrop-blur-md border-white/20"

				)}

			>


				{/* LOGO + COUNTDOWN */}

				<div className="flex gap-5 items-center flex-shrink-0">


					<Link href="/">

						<Logo w={55} h={55}/>

					</Link>



					<div

					className="
					flex
					items-center
					rounded-full
					bg-[#F8F3E8]
					border
					border-[#B8863B]/20
					px-3
					py-1.5
					text-xs
					font-bold
					text-[#A67C2D]
					"

					>

						<TimerMini />

					</div>


				</div>




				{/* DESKTOP LINKS */}

				<div className="hidden xl:flex items-center">


					<ul className="flex gap-6 items-center">


					{navLinks.map((link)=>{


						if(link.button){

							return (

								<li key={generateKey()}>

									<Button

										href={link.href}

										animation

										dark

										disabled={
											isEventOver ||
											isEventHappening
										}

									>

										{link.title} →

									</Button>

								</li>

							)

						}



						if(link.menu){

							return (

								<li key={generateKey()}>

									<NavLinkMenu

										trigger={{
											...link
										}}

										content={
											link.children.map(child=>({

												title:child.title,

												href:child.href,

												img:{
													src:child.icon.src,
													alt:child.icon.alt
												}

											}))
										}

										dark={dark}

									/>

								</li>

							)

						}



						return (

							<li key={generateKey()}>

								<NavLink

								href={link.href}

								animation

								dark={dark}

								>

									{link.title}

								</NavLink>


							</li>

						)


					})}


					</ul>


				</div>




				<Sidebar dark={dark}/>


			</div>


		</motion.nav>

	)

}


export default Navbar;