"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// Letters brighten one after another the first time the quote is on screen.
export default function QuoteReveal({ text }) {
	const ref = useRef(null);
	const [on, setOn] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setOn(true);
					io.disconnect();
				}
			},
			{ threshold: 0.6 }
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	const words = text.split(" ");
	let index = 0;

	return (
		<blockquote ref={ref} className={on ? "quote-on" : ""}>
			<p
				aria-label={text}
				className="text-[clamp(1.75rem,4.2vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.035em]">
				<span aria-hidden="true">
					&ldquo;
					{words.map((w, wi) => (
						<Fragment key={wi}>
							<span className="inline-block whitespace-nowrap">
								{[...w].map((ch, ci) => {
									const delay = index++ * 22;
									return (
										<span key={ci} className="quote-letter" style={{ transitionDelay: `${delay}ms` }}>
											{ch}
										</span>
									);
								})}
							</span>
							{wi < words.length - 1 ? " " : ""}
						</Fragment>
					))}
					&rdquo;
				</span>
			</p>
		</blockquote>
	);
}
