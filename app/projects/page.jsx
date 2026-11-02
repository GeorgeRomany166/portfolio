import { Chapter } from "@/components/site/Chapter";
import Work from "@/components/site/Work";

export const metadata = {
	title: "Work",
	description: "Projects by George Romany: dashboards, e-commerce and landing sites built with React and Next.js.",
};

export default function ProjectsPage() {
	return (
		<Chapter n={2} id="work" label="Work" wide className="pt-36 md:pt-44">
			<div className="mb-12 max-w-[30rem]">
				<h1 className="text-[clamp(2rem,4.6vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.04em]">
					Work
				</h1>
				<p className="mt-3 text-soft">Everything I&rsquo;ve built and shipped. Open a project for screenshots and details.</p>
			</div>
			<Work />
		</Chapter>
	);
}
