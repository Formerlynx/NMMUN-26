import NextTopLoader from "nextjs-toploader";

import {
	AnimationWrapper,
	Banner,
	Footer,
	Navbar,
	ScrollToTopButton,
	FloatingScrollToTopButton,
	LoadingScreen,
} from "../navigation";


interface Props {
	noScrollToTop?: boolean;

	navbar?: {
		dark?: boolean;
		delay?: number;
	};

	children: React.ReactNode;
}



const BaseLayout = ({
	children,
	noScrollToTop,
	navbar
}: Props) => {


	return (

		<AnimationWrapper>


			<LoadingScreen />


			<NextTopLoader

				color="#ED561F"

				initialPosition={0.08}

				crawlSpeed={200}

				height={3}

				crawl={true}

				showSpinner={false}

				easing="ease"

				speed={200}

				shadow="0 0 10px #ED561F,0 0 5px #ED561F"

			/>



			<Banner />


			<main className="w-full relative">


				<Navbar

					delay={navbar?.delay ?? 1.6}

					{...navbar}

				/>



				{children}



				{!noScrollToTop && (

					<ScrollToTopButton />

				)}



				<Footer />


			</main>



			{!noScrollToTop && (

				<FloatingScrollToTopButton />

			)}



		</AnimationWrapper>

	);

};


export default BaseLayout;