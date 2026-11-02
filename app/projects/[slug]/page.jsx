import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/components/site/Work";

export function generateStaticParams() {
	return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const p = allProjects.find((x) => x.slug === slug);
	if (!p) return {};
	return { title: p.title, description: p.desc[0] };
}

export default async function ProjectPage({ params }) {
	const { slug } = await params;
	const index = allProjects.findIndex((x) => x.slug === slug);
	if (index === -1) notFound();
	const p = allProjects[index];
	const next = allProjects[(index + 1) % allProjects.length];
	const gallery = [p.thumbnail, ...p.images.filter((src) => src !== p.thumbnail)];
	const [name, kind] = p.title.split(" — ");

	return (
		<article className="mx-auto max-w-[84rem] px-5 pb-10 pt-36 sm:px-8 md:pt-44">
			<div className="mx-auto max-w-[30rem]">
				<p className="text-[14px] text-soft">
					<Link href="/projects" className="hover:text-ink">
						Work
					</Link>
					<span aria-hidden="true"> / </span>
					<span aria-current="page">{name}</span>
				</p>
				<h1 className="mt-4 text-[clamp(2rem,4.6vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.04em]">
					{name}
					{kind ? <span className="text-soft"> {kind.toLowerCase()}</span> : null}
				</h1>

				<div className="mt-8 space-y-5 text-[1.1875rem] leading-[1.42] tracking-[-0.018em]">
					{p.desc.map((d, i) => (
						<p key={d.slice(0, 20)} className={i === 0 ? "" : "text-soft"}>
							{d}
						</p>
					))}
				</div>

				<dl className="mt-10 grid grid-cols-[6rem_1fr] gap-y-3 border-t border-rule pt-6 text-[15px]">
					<dt className="text-soft">Year</dt>
					<dd>{p.year}</dd>
					<dt className="text-soft">Built with</dt>
					<dd>{p.tech.join(", ")}</dd>
				</dl>

				{p.preview || p.code ? (
					<div className="mt-8 flex flex-wrap gap-2 text-[15px]">
						{p.preview ? (
							<a
								href={p.preview}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-ink px-5 py-2.5 text-white hover:bg-[#3a3a3e]">
								{p.previewLabel ? "Try the live demo" : "Visit the site"}
							</a>
						) : null}
						{p.code ? (
							<a
								href={p.code}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full border border-rule px-5 py-2.5 hover:border-faint">
								View the code
							</a>
						) : null}
					</div>
				) : null}
			</div>

			<div className="mx-auto mt-20 max-w-[64rem] space-y-8 md:mt-28">
				{gallery.map((src, i) => (
					<div key={src} className="overflow-hidden rounded-[1.25rem] bg-wash">
						<Image
							src={src}
							alt={`${name}, screenshot ${i + 1} of ${gallery.length}`}
							width={1600}
							height={1000}
							sizes="(min-width: 1024px) 64rem, 100vw"
							className="h-auto w-full"
							priority={i === 0}
						/>
					</div>
				))}
			</div>

			<div className="mx-auto mt-24 max-w-[30rem] border-t border-rule pt-8 text-center">
				<p className="text-[14px] text-soft">Next project</p>
				<Link
					href={`/projects/${next.slug}`}
					className="mt-2 inline-block text-[1.75rem] font-medium tracking-[-0.035em] hover:text-soft">
					{next.title.split(" — ")[0]}
				</Link>
			</div>
		</article>
	);
}
