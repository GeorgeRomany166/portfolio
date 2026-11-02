import Image from "next/image";
import Link from "next/link";
import { Chapter, TwoTone } from "@/components/site/Chapter";
import Work from "@/components/site/Work";
import QuoteReveal from "@/components/site/QuoteReveal";
import { experience, profile, services } from "@/lib/content";
import Portrait from "@/public/image/me4.jpg";

const body = "space-y-6 text-[1.1875rem] leading-[1.42] tracking-[-0.018em]";

export default function HomePage() {
	return (
		<>
			{/* 01: who I am */}
			<Chapter n={1} id="about" label="About" className="pt-36 md:pt-48">
				<h1 className="text-[clamp(2rem,4.6vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.04em]">
					George Romany is a frontend engineer in Cairo,{" "}
					<span className="text-soft">building fast, careful interfaces with React, Next.js and TypeScript.</span>
				</h1>

				<div className={`mt-10 ${body}`}>
					<TwoTone
						lead="By day I build the travel website and booking flow at Rehletna."
						rest="Most of the job is small decisions about forms, dates and prices, made to feel simple."
					/>
					<TwoTone
						lead="On the side I take on freelance work: an agency dashboard, a bilingual Arabic and English ERP, an online store."
						rest="Right-to-left layouts are something I actually enjoy getting right."
					/>
					<p>
						I&rsquo;m looking for a team that cares about the details as much as the deadline.{" "}
						<Link href="#contact" className="lapis font-medium">
							If that&rsquo;s you, let&rsquo;s talk.
						</Link>
					</p>
				</div>
			</Chapter>

			<figure className="mx-auto -mt-10 max-w-[44rem] px-5 md:-mt-16">
				<div className="dissolve relative aspect-[5/6] saturate-[0.85]">
					<Image
						src={Portrait}
						alt="George Romany"
						fill
						priority
						placeholder="blur"
						sizes="(min-width: 640px) 40rem, 100vw"
						className="object-cover object-[50%_22%]"
					/>
				</div>
			</figure>

			{/* 02: work */}
			<Chapter n={2} id="work" label="Selected work" wide>
				<div className="mb-12 max-w-[30rem]">
					<h2 className="text-[1.75rem] font-medium tracking-[-0.035em]">Selected work</h2>
					<p className="mt-3 text-soft">A few things I&rsquo;ve built, from the first commit to launch.</p>
				</div>
				<Work />
			</Chapter>

			{/* 03: what I do */}
			<Chapter n={3} id="services" label="What I do">
				<h2 className="text-[1.75rem] font-medium tracking-[-0.035em]">What I do</h2>
				<p className="mt-3 text-soft">Frontend, end to end. I don&rsquo;t pretend to do the rest.</p>
				<dl className="mt-10 divide-y divide-rule border-y border-rule">
					{services.map(([title, text]) => (
						<div key={title} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
							<dt className="font-medium">{title}</dt>
							<dd className="text-soft">{text}</dd>
						</div>
					))}
				</dl>
			</Chapter>

			{/* 04: experience */}
			<Chapter n={4} id="experience" label="Experience" width="max-w-[48rem]">
				<div className="max-w-[30rem]">
					<h2 className="text-[1.75rem] font-medium tracking-[-0.035em]">Experience</h2>
					<p className="mt-3 text-soft">
						The full story is in my{" "}
						<a href={profile.cv} download className="text-ink underline decoration-faint underline-offset-4 hover:decoration-ink">
							CV
						</a>
						.
					</p>
				</div>
				<ol className="mt-10 border-t border-rule">
					{experience.map((e) => (
						<li
							key={e.hash}
							className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
							<span className="text-[14px] text-soft sm:pt-0.5">{e.date}</span>
							<div>
								<p className="font-medium">
									{e.role}
									<span className="font-normal text-soft">, {e.company}</span>
								</p>
								<p className="mt-1 max-w-[56ch] text-[15px] text-soft">{e.points[0]}</p>
							</div>
						</li>
					))}
				</ol>
			</Chapter>

			{/* 05: a belief */}
			<Chapter n={5} id="belief" label="What I believe" wide center>
				<div className="mx-auto max-w-[46rem]">
					<QuoteReveal text="Good frontend work is invisible. People only notice that everything works." />
				</div>
			</Chapter>

			{/* 06: contact */}
			<Chapter n={6} id="contact" label="Contact" center>
				<h2 className="text-[1.75rem] font-medium tracking-[-0.035em]">Want to work together?</h2>
				<TwoTone
					className="mt-4 text-[1.1875rem] leading-[1.42]"
					lead="I'm open to frontend roles in Cairo, hybrid or remote."
					rest="Email is the quickest way to reach me."
				/>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[15px]">
					<a
						href={`mailto:${profile.email}?subject=Hello%20George`}
						className="rounded-full bg-ink px-5 py-2.5 text-white shadow-[0_6px_18px_-8px_rgb(0_0_0/0.45)] hover:bg-[#3a3a3e]">
						Email me
					</a>
					<a
						href={profile.cv}
						download
						className="rounded-full border border-rule px-5 py-2.5 text-ink hover:border-faint">
						Download CV
					</a>
				</div>
				<p className="mt-6 text-[15px] text-soft">{profile.email}</p>
			</Chapter>
		</>
	);
}
