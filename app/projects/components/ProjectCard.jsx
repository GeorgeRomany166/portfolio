import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
	if (!project.category.includes(parseInt(activeCategory))) return null;

	const summary =
		project.desc[0].length > 140
			? `${project.desc[0].slice(0, 140).trimEnd()}…`
			: project.desc[0];

	return (
		<Link
			href={"projects/" + project.slug}
			key={index}
			className="block rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
			aria-label={`${project.title}: view project details`}>
			<motion.article
				className="group relative mb-5 w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-lg"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ type: "spring", delay: (index % 2) * 0.1 }}>
				<Image
					src={project.thumbnail}
					alt=""
					fill
					sizes="(min-width: 768px) 50vw, 100vw"
					placeholder="blur"
					blurDataURL={BlurImage.src}
					className="object-cover object-top opacity-35 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-60"
				/>
				<div
					className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/10"
					aria-hidden="true"
				/>
				<span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
					{project.year}
				</span>
				<div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
					<h3 className="text-2xl md:text-3xl font-bold mb-2">
						{project.title}
					</h3>
					<p className="text-sm md:text-base text-gray-200 leading-relaxed mb-4 line-clamp-3">
						{summary}
					</p>
					<ul className="flex flex-wrap gap-2" aria-label="Tech stack">
						{project.tech.slice(0, 5).map((t) => (
							<li
								key={t}
								className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">
								{t}
							</li>
						))}
					</ul>
					<span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-200 transition-transform group-hover:translate-x-1">
						View project <span aria-hidden="true">→</span>
					</span>
				</div>
			</motion.article>
		</Link>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};
