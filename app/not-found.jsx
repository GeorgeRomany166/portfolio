import Link from "next/link";

export default function NotFound() {
	return (
		<div className="mx-auto max-w-[30rem] px-5 pb-24 pt-44 sm:px-0">
			<h1 className="text-[clamp(2rem,4.6vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.04em]">
				This page doesn&rsquo;t exist.{" "}
				<span className="text-soft">The link may be old, or the page has moved.</span>
			</h1>
			<div className="mt-10 flex flex-wrap gap-2 text-[15px]">
				<Link href="/" className="rounded-full bg-ink px-5 py-2.5 text-white hover:bg-[#3a3a3e]">
					Go to the home page
				</Link>
				<Link href="/projects" className="rounded-full border border-rule px-5 py-2.5 hover:border-faint">
					See my work
				</Link>
			</div>
		</div>
	);
}
