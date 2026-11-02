// A numbered chapter of the page. The number sits in the margin, the
// content in one narrow column, the way a book sets its sections.
export function Chapter({ n, id, label, wide = false, width, center = false, children, className = "" }) {
	return (
		<section
			id={id}
			aria-label={label}
			className={`mx-auto max-w-[84rem] px-5 py-20 sm:px-8 md:py-32 ${className}`}>
			<div className={`relative mx-auto ${width ?? (wide ? "max-w-[64rem]" : "max-w-[30rem]")} ${center ? "text-center" : ""}`}>
				<span
					aria-hidden="true"
					className={`font-mono text-[11px] text-faint ${
						center ? "mb-4 block" : "mb-4 block md:absolute md:-left-12 md:top-[0.4rem] md:mb-0"
					}`}>
					{String(n).padStart(2, "0")}
				</span>
				{children}
			</div>
		</section>
	);
}

// A paragraph that starts in ink and trails off in grey.
export function TwoTone({ lead, rest, as: Tag = "p", className = "" }) {
	return (
		<Tag className={className}>
			{lead}
			{rest ? <span className="text-soft"> {rest}</span> : null}
		</Tag>
	);
}
