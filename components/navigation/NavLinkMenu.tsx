"use client";

import * as React from "react";
import Link from "next/link";
import { Box } from "lucide-react";
import Image from "next/image";

import { cn, generateKey } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import NavLink from "./NavLink";

interface Props {
	trigger: {
		title: string;
		href: string;
		className?: string;
	};
	content: {
		title: string;
		href: string;
		img: {
			src: string;
			alt: string;
			className?: string;
		};
	}[];
	dark?: boolean;
}

export default function NavLinkMenu({ trigger, content, dark }: Props) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:bg-opacity-0 p-0">
						<NavLink
							href={trigger.href}
							className={trigger.className}
							animation
							dark={dark}
						>
							{trigger.title}
						</NavLink>
					</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-[#E6B076]">
						<ul className="grid w-[500px] gap-3 p-4 grid-cols-4">
							{content.map((element) => (
								<li key={generateKey()}>
									<NavigationMenuLink asChild>
										<a
											href={element.href}
											title={element.title}
											className="flex flex-col items-center select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:shadow-md text-gray-700 hover:text-black"
										>
											<div className="w-8 h-8">
												<Image {...element.img} alt="navigation icon" className="w-full h-full object-contain" fill/>
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-center truncate w-full text-gray-700 font-medium">
												{element.title}
											</p>
										</a>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
