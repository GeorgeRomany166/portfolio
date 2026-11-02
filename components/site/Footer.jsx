import { profile } from "@/lib/content";

export default function Footer() {
	return (
		<footer className="mx-auto flex max-w-[84rem] flex-wrap items-center gap-x-6 gap-y-2 px-5 pb-8 pt-16 text-[13px] text-soft sm:px-8">
			<span>George Romany Labany, Frontend Engineer, {new Date().getFullYear()}</span>
			<span className="ml-auto flex gap-5">
				<a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
					LinkedIn
				</a>
				<a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
					GitHub
				</a>
				<a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
					Instagram
				</a>
			</span>
		</footer>
	);
}
