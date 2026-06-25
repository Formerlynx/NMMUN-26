import { BaseLayoutProps } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";

interface Props extends BaseLayoutProps {
	img: {
		src: string;
		alt: string;
		className?: string;
	};
	reverse?: boolean;
}

const ImageContainerFull = ({
	children,
	className,
	id,
	background,
	reverse,
	img: { src, alt, className: imgClassName },
}: Props) => {
	return (
		<section
			className="relative p w-full flex justify-center snap-center"
			id={id}
		>
			{background}

			<div
				className={clsx(
					"hidden md:block md:w-1/2 bg-black absolute top-0 h-full overflow-y-hidden z-[12]",
					reverse ? "left-0" : "right-0"
				)}
			>
				<Image src={src} alt={alt} className="w-full object-cover h-full" fill/>
			</div>

			<div className="w-full md:hidden bg-black absolute top-0 left-0 h-full overflow-y-hidden z-[12]">
				<Image
					src={src}
					alt={alt}
					className="w-full object-cover h-full"
					fill
					style={{ opacity: 0.4 }}
				/>
			</div>

			<div
				className={clsx(
					"flex flex-row relative z-[12] max-w-7xl w-full py-28",
					reverse && "flex-row-reverse",
					className
				)}
			>
				<div
					className={clsx(
						"w-full md:w-1/2 flex flex-col justify-center",
						reverse ? "md:pl-6" : "md:pr-6"
					)}
				>
					{children}
				</div>
			</div>
		</section>
	);
};

export default ImageContainerFull;
