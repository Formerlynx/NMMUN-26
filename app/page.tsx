"use client";

import {
	Background,
	BaseLayout,
	Container,
	Details,
	ImageContainer,
	ImageContainerFull,
} from "@/components/layouts";
import { FAQ, HeroCarousel, HeroMini, Timer } from "@/components/content";
import {
	Heading,
	Lead,
	List,
	Paragraph,
	Quote,
	Title,
} from "@/components/typography";
import { CTA } from "@/components/navigation";

import { useTime } from "@/hooks/useTime";
import { AnimationVariants } from "@/lib/types";
import { onScrollAnimation, animation } from "@/lib/animations";
import { hero, eventDateInWords } from "@/lib/config";

export default function Home() {
	const { isEventHappening, isEventOver } = useTime();

	return (
		<BaseLayout navbar={{ dark: true }}>
			<HeroCarousel
				images={[
					{ src: "/hero/hero-home-1.jpg", alt: "Hero image" },
					{ src: "/hero/hero-home-2.jpg", alt: "Hero image" },
					{ src: "/hero/hero-home-3.jpg", alt: "Hero image" },
					{ src: "/hero/hero-home-4.jpg", alt: "Hero image" },
					{ src: "/hero/hero-home-5.jpg", alt: "Hero image" },
				]}
				opacity={0.4}
				className="text-white"
				scroll={{
					href: "#quote",
				}}
			>
				<Title
					animation={animation(AnimationVariants.FromDown, {
						delay: 2.4,
					})}
				>
					NMMUN
				</Title>
				<Lead
					className="!font-medium !text-white"
					animation={animation(AnimationVariants.FromDown, {
						opacity: 0.8,
						delay: 2.5,
					})}
				>
					2026-27
				</Lead>
				<Paragraph
					animation={animation(AnimationVariants.FromDown, {
						opacity: 0.8,
						delay: 2.6,
					})}
				>
					{(() => {
						if (isEventHappening) return hero.duringEvent;
						else if (isEventOver) return hero.afterEvent;
						else return hero.beforeEvent;
					})()}
				</Paragraph>
				<Paragraph
					animation={animation(AnimationVariants.FromDown, {
						opacity: 0.8,
						delay: 2.6,
					})}
					className="!mt-0"
				>
					{!isEventHappening && !isEventOver ? eventDateInWords : ""}
				</Paragraph>
				<CTA
					animation={animation(AnimationVariants.FromDown, {
						opacity: 1,
						delay: 2.7,
					})}
				/>
			</HeroCarousel>

			<Container
				id="quote"
				background={
					<Background
						color="bg-black"
						img={{
							src: "/hero/quote.jpg",
							alt: "A conference image",
							opacity: 0.4,
						}}
					/>
				}
			>
				<Quote
					className="text-xl md:text-3xl font-medium w-4/5 m-auto text-white border-gray-300 border-l-4"
					animation={onScrollAnimation(AnimationVariants.FromDown)}
					quotationSize="4rem"
				>
					At New Millennium School, Bahrain, we believe in shaping future
					leaders, and the New Millennium Model United Nations (NMMUN)
					Conference is where this transformation begins.
				</Quote>
			</Container>

			<Container
				id="theme"
				background={
					<Background
						color=""
						img={{ src: "/home/green.webp", alt: "theme bg" }}
					/>
				}
			>
				<Details>
					<Heading
						className="mb-6 xl:w-3/4"
						animation={onScrollAnimation(AnimationVariants.FromLeft)}
					>
						ALEA IACTA EST: <br/> &quot;The Die is Cast&quot;
					</Heading>

					<Paragraph
						animation={onScrollAnimation(AnimationVariants.FromLeft, {
							opacity: 0.8,
						})}
					>
						The world stands at a defining crossroads. Across every continent, nations are confronted by choices whose consequences will echo for generations to come. From shifting geopolitical alliances and accelerating technological revolutions to climate tipping points, economic uncertainty, and the growing race for influence beyond Earth, the decisions made today are no longer temporary responses—they are the foundations of tomorro&apos;s world order.<br/>

						<br/>&quot;Alea Iacta Est,&quot; the famous declaration attributed to Julius Caesar as he crossed the Rubicon, signifies the moment when hesitation ends and commitment begins. Once the die is cast, there is no turning back. Likewise, the international community now faces an era where every diplomatic negotiation, legislative reform, economic policy, humanitarian intervention, and strategic decision carries irreversible consequences. The question is no longer whether change will come, but who will shape it and at what cost.<br/>

					</Paragraph>
				</Details>
			</Container>

			<ImageContainer
				id="about"
				img={{
					src: "/home/diplomacy.png",
					alt: "diplomacy illustration",
				}}
				background={<Background color="bg-[#E6B076]" />}
				className="text-gray-700"
			>
				<Heading animation={onScrollAnimation(AnimationVariants.FromLeft)}>
					Discover Diplomacy Embrace Change
				</Heading>
				<Paragraph
					animation={onScrollAnimation(AnimationVariants.FromLeft, {
						opacity: 0.8,
					})}
				>
					The NMMUN Conference isn&apos;t just an event; it&apos;s an
					opportunity to explore the complexities of global diplomacy. Here,
					you&apos;ll step into the shoes of world leaders, debate critical
					global issues, and draft resolutions to make a real impact.
				</Paragraph>
			</ImageContainer>

			<ImageContainerFull
				id="why-us"
				img={{
					src: "/home/join-us.jpg",
					alt: "conference in session",
				}}
				reverse
				background={<Background color="bg-color-3" />}
				className="text-white"
			>
				<Heading animation={onScrollAnimation(AnimationVariants.FromRight)}>
					Why Join Us:
				</Heading>
				<List
					elements={[
						<>
							<span className="font-semibold underline">
								Educational Experience:
							</span>{" "}
							<span className="opacity-80">
								Gain an in-depth understanding of global affairs and the art of
								international diplomacy.
							</span>
						</>,
						<>
							<span className="font-semibold underline">Personal Growth:</span>{" "}
							<span className="opacity-80">
								Develop leadership, teamwork, and problem-solving skills
								essential for your future.
							</span>
						</>,
						<>
							<span className="font-semibold underline">Global Network:</span>{" "}
							<span className="opacity-80">
								Connect with like-minded peers who share your passion for global
								change.
							</span>
						</>,
						<>
							<span className="font-semibold underline">
								Fun and Fulfillment:
							</span>{" "}
							<span className="opacity-80">
								Enjoy an intellectually stimulating, fun-filled day leaving you
								with a sense of accomplishment.
							</span>
						</>,
					]}
					animation={onScrollAnimation(AnimationVariants.FromRight)}
				/>
			</ImageContainerFull>

			<Container
				center
				id="faq"
				background={<Background color="bg-white" />}
				className="text-black"
			>
				<Details>
					<Heading
						className="mb-6 !text-black"
						animation={onScrollAnimation(AnimationVariants.FromDown)}
					>
						FAQs
					</Heading>
					<FAQ
						question="Is there a registration fee?"
						answer="Yes, there is a registration fee of 20BHD for all delegates and chairs."
						animation={onScrollAnimation(AnimationVariants.FromDown)}
						className="text-black"
					/>
					<FAQ
						question="Will food be provided on the day of the conference?"
						answer="We will provide breakfast, lunch, and snacks on the days of the conference."
						animation={onScrollAnimation(AnimationVariants.FromDown)}
						className="text-black"
					/>
					<FAQ
						question="Can I sign up if I know nothing about MUNs?"
						answer="Yes you can! We will provide all delegates with training sessions and our team will always be available to assist you."
						animation={onScrollAnimation(AnimationVariants.FromDown)}
						className="text-black"
					/>
					<FAQ
						question="How do I submit the fees?"
						answer="Information regarding registering and submitting the fees is given in detail in the register page"
						animation={onScrollAnimation(AnimationVariants.FromDown)}
						className="text-black"
					/>
				</Details>
			</Container>

			<HeroMini
				image={{
					src: "/hero/hero-mini.jpeg",
					alt: "whatever",
					opacity: 1,
				}}
				sectionClassName="bg-white py-10"
				className="text-white"
			>
				<Title
					small
					animation={onScrollAnimation(AnimationVariants.FromDown)}
					center
				>
					SECURE YOUR SPOT
				</Title>
				<Paragraph
					animation={onScrollAnimation(AnimationVariants.FromDown)}
					center
				>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation(AnimationVariants.FromDown)} />
				<CTA animation={onScrollAnimation(AnimationVariants.FromDown)} />
			</HeroMini>
		</BaseLayout>
	);
}