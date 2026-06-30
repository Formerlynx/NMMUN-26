"use client";

import { teamLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { animation, onScrollAnimation } from "@/lib/animations";
import { AnimationVariants as av } from "@/lib/types";
import { Paragraph, Title } from "@/components/typography";
import { BaseLayout, Container } from "@/components/layouts";
import { CTA, TableOfContent } from "@/components/navigation";
import { Hero, HeroMini, Profiles, Timer } from "@/components/content";

function TeamPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-teams.jpg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
				scroll={{
					href: "#table-of-content",
				}}
			>
				<Title
					animation={animation("fromDown", {
						delay: 2,
					})}
				>
					OUR TEAM
				</Title>
				<Paragraph
					animation={animation("fromDown", {
						delay: 2.1,
					})}
				>
					The heartbeat of our MUN: Introducing the Team
				</Paragraph>
				<CTA
					animation={animation("fromDown", {
						delay: 2.2,
					})}
				/>
			</Hero>

			<TableOfContent links={teamLinks} />

			<Container>
				{teamLinks.map((team) => (
					<Profiles team={team} key={generateKey()} />
				))}
			</Container>

			<div className="my-20"></div>

			<HeroMini
				image={{
					src: "/hero/hero-mini.jpeg",
					alt: "whatever",
					opacity: 1,
			}}
			sectionClassName="bg-white py-10"
			className="text-white bg-transparent"
			>
				<Title small animation={onScrollAnimation(av.FromDown)} center>
					SECURE YOUR SPOT
				</Title>
				<Paragraph animation={onScrollAnimation(av.FromDown)} center>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation(av.FromDown)} />
				<CTA animation={onScrollAnimation(av.FromDown)} />
			</HeroMini>
		</BaseLayout>
	);
}

export default TeamPage;
