import Image from "next/image";
import Link from "next/link";
import data from "@/json/data.json";

export const allProjects = data.Projects.filter((p) => p.show);

function Caption({ p, featured }) {
	return (
		<div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
			<h3 className={`${featured ? "text-[1.375rem]" : "text-lg"} font-medium tracking-[-0.025em]`}>
				<Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
					{p.title.split(" — ")[0]}
				</Link>
				<span className="text-soft"> {p.title.split(" — ")[1] ?? ""}</span>
			</h3>
			<p className="text-[14px] text-soft">
				{p.tech.slice(0, featured ? 4 : 3).join(", ")}
				<span className="ml-3 font-mono text-[11px] text-faint">{p.year}</span>
			</p>
		</div>
	);
}

function Shot({ p, sizes, priority }) {
	return (
		<div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-wash">
			<Image
				src={p.thumbnail}
				alt=""
				fill
				sizes={sizes}
				priority={priority}
				className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
			/>
		</div>
	);
}

export default function Work() {
	const [first, ...rest] = allProjects;
	return (
		<div className="space-y-16 md:space-y-20">
			<article className="group relative">
				<Shot p={first} sizes="(min-width: 1024px) 64rem, 100vw" priority />
				<Caption p={first} featured />
				{first.preview ? (
					<p className="relative z-10 mt-3 text-[15px]">
						<a
							href={first.preview}
							target="_blank"
							rel="noopener noreferrer"
							className="lapis font-medium underline decoration-[#2c4fcf]/30 underline-offset-4">
							Try the live demo
						</a>
						<span className="text-soft">, it signs you in with one click.</span>
					</p>
				) : null}
			</article>
			<div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
				{rest.map((p) => (
					<article key={p.slug} className="group relative">
						<Shot p={p} sizes="(min-width: 768px) 32rem, 100vw" />
						<Caption p={p} />
					</article>
				))}
			</div>
		</div>
	);
}
