import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me.jpg";
import Me2 from "@/public/image/me4.jpg";
import Me3 from "@/public/image/me2.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="George"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="George"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="George"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						George Romany Labany
					</h2>
					<p className="text-gray-600 title text-lg leading-relaxed">
						Hey there, I&rsquo;m George, a{" "}
						<span className="text-black font-medium">Frontend Engineer</span>{" "}
						in Cairo. I build production web apps with{" "}
						<span className="text-black font-medium">
							React.js, Next.js and TypeScript
						</span>
						, currently on the travel booking platform at{" "}
						<span className="text-black font-medium">Rehletna</span> and on
						freelance projects like a bilingual Arabic/English ERP system and
						an agency dashboard.
					</p>
					<p className="text-gray-600 title text-lg leading-relaxed mt-4">
						I hold a B.Sc. in{" "}
						<span className="text-black font-medium">Computer Science</span> from
						the{" "}
						<span className="text-black font-medium">
							Modern University for Technology &amp; Information (MTI)
						</span>
						. I care about clean component architecture, accessibility and
						turning designs into fast, responsive interfaces.
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
