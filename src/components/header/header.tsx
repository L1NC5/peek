import Link from "next/link";
import React from "react";
import { GiCrystalBall } from "react-icons/gi";

export interface NavigationItem {
	id: string;
	content: React.ReactNode;
}

export interface headerProps {
	showLogo: boolean;
	mainNavigation: NavigationItem[];
}

export default function Header({ showLogo, mainNavigation }: headerProps) {
	return (
		<header className="sticky inset-x-0 top-0 isolate z-10 grid h-header grid-cols-[auto_1fr_auto] items-center justify-items-center gap-x-4 bg-stone-700 px-base">
			{showLogo && (
				<Link href={"/"}>
					<GiCrystalBall className="text-2xl" />
				</Link>
			)}
			<ul className="flex items-center gap-x-2">
				{mainNavigation?.map((item) => (
					<React.Fragment key={item.id}>{item.content}</React.Fragment>
				))}
			</ul>
		</header>
	);
}
