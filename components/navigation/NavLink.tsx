import clsx from "clsx";
import Link from "next/link";

interface Props {
	className?: string;
	animation?: boolean;
	dark?: boolean;
	href: string;
	children: React.ReactNode;
}

const NavLink = ({ className, href, animation, dark, children }: Props) => {
	return (
		<Link
			href={href}
			className={clsx(
				"text-sm font-medium cursor-pointer transition-all duration-300 px-8 py-2.5 rounded-md bg-[#575757] text-[#d1d5db] hover:bg-[#6b6b6b] hover:text-white h-fit whitespace-nowrap",
				animation && "nav-link-anim nav-link-ltr",
				dark && "nav-link-anim-dark",
				className
			)}
		>
			{children}
		</Link>
	);
};

export default NavLink;
