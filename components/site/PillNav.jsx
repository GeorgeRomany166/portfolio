"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
	{ href: "/#work", label: "Work" },
	{ href: "/#about", label: "About" },
	{ href: "/#experience", label: "Experience" },
];

export default function PillNav() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className="pointer-events-none fixed inset-x-0 top-0 z-40 before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-gradient-to-b before:from-white/95 before:via-white/70 before:to-transparent">
			<div className="relative mx-auto flex max-w-[84rem] items-center justify-between px-5 pt-5 sm:px-8">
				<Link
					href="/"
					className={`pointer-events-auto text-[15px] font-medium tracking-[-0.02em] transition-opacity ${
						scrolled && pathname === "/" ? "opacity-0 sm:opacity-100" : "opacity-100"
					}`}>
					George Romany
				</Link>
				<nav aria-label="Main" className="pointer-events-auto">
					<ul className="flex items-center gap-1.5 text-[14px]">
						{items.map((i) => (
							<li key={i.href} className="hidden sm:block">
								<Link
									href={i.href}
									className="rounded-full border border-rule bg-white/70 px-4 py-2 text-soft shadow-[0_1px_2px_rgb(0_0_0/0.04)] backdrop-blur-md transition-colors hover:text-ink">
									{i.label}
								</Link>
							</li>
						))}
						<li>
							<Link
								href="/#contact"
								className="rounded-full bg-ink px-4 py-2 text-white shadow-[0_6px_18px_-8px_rgb(0_0_0/0.45)] transition-colors hover:bg-[#3a3a3e]">
								Get in touch
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
