import { BaseComponentProps } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";

interface Props extends BaseComponentProps {
	children: React.ReactNode;
	sectionClassName?: string;
	image: {
		src: string;
		alt: string;
		opacity?: number;
		className?: string;
	};
}

function HeroMini({
	children,
	className,
	sectionClassName,
	image: { src, alt, opacity, className: imgClassName },
}: Props) {
	return (
		<section className={clsx("w-full flex justify-center p", sectionClassName)}>
			<div className={clsx("max-w-7xl w-full py-28 md:py-20 relative rounded-2xl overflow-hidden shadow-xl bg-black", className?.includes('bg-') && "bg-transparent")}>
				<Image
					src={src}
					alt={alt}
					className={clsx(
						"w-full h-full absolute object-cover top-0 left-0",
						imgClassName
					)}
					style={{ opacity: opacity || 0.4 }}
				/>

				<div
					className={clsx(
						"relative z-10 flex flex-col justify-center items-center p",
						className
					)}
				>
					{children}
				</div>
			</div>
		</section>
	);
}

export default HeroMini;
