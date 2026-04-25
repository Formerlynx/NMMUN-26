"use client";

import { motion } from "framer-motion";

import {
	Hero,
	HeroMini,
	Masonry,
	Timeline,
	TimelineContainer,
	Timer,
} from "@/components/content";
import { CTA } from "@/components/navigation";
import { Paragraph, Title } from "@/components/typography";
import { Background, BaseLayout, Container } from "@/components/layouts";
import { animation, onScrollAnimation } from "@/lib/animations";

function GalleryPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-gallery.jpeg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
			>
				<Title
					animation={animation("fromDown", {
						delay: 2,
					})}
				>
					GALLERY
				</Title>
				<Paragraph
					animation={animation("fromDown", {
						delay: 2.1,
						opacity: 0.8,
					})}
				>
					Get a glimpse of our MUN experience through pictures.
				</Paragraph>
				<CTA
					animation={animation("fromDown", {
						delay: 2.2,
					})}
				/>
			</Hero>

			<Container 
				className="flex flex-col items-center justify-center py-40"
				background={<Background color="bg-[#FCF5E5]" />}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h2 className="text-5xl font-serif text-[#050517] mb-4">Gallery - Coming Soon</h2>
					<div className="w-24 h-1 bg-[#ED561F] mx-auto mb-8"></div>
					<p className="text-gray-600 max-w-md mx-auto">
						Our visual journey is being curated. Stay tuned for glimpses of 
						diplomacy, leadership, and memorable moments from NMMUN 2026.
					</p>
				</motion.div>
			</Container>

			<div className="my-20"></div>

			<HeroMini
				image={{
					src: "/hero/hero-mini.jpeg",
					alt: "whatever",
					opacity: 0.6,
				}}
				className="text-white"
				background={<Background color="bg-[#050517]" />}
			>
				<Title small animation={onScrollAnimation("fromDown")} center>
					SECURE YOUR SPOT
				</Title>
				<Paragraph animation={onScrollAnimation("fromDown")} center>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation("fromDown")} />
				<CTA animation={onScrollAnimation("fromDown")} />
			</HeroMini>
		</BaseLayout>
	);
}

export default GalleryPage;
