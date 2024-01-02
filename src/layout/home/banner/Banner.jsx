import bgImg from "../../../assets/bg-banner.png";
import Button from "../../../components/buttons/Button";
import arrowIcon from "../../../assets/icons/fi-arrow-small-right.svg";

export default function Banner() {
	return (
		<div className="text-center">
			{/* Background Underlay */}
			<div
				style={{ backgroundImage: `url('${bgImg}')` }}
				className="h-[100vh] debug w-full absolute z-[-1] opacity-20 mix-blend-soft-light"
			></div>

			{/* Content & CTA */}
			<div className="pt-[72px] pb-[58px] space-y-9 max-w-[913px] container mx-auto">
				{/* CTA 1 */}
				<Button
					rounded="9999px"
					type="secondary"
					paddingX={22}
					paddingY={10}
					className="flex items-center font-medium mx-auto gap-[10px]"
				>
					Become an Instructor <img src={arrowIcon} />
				</Button>

				{/* Texts */}
				<div>
					<h1 className="text-4xl text-rich-black-5 font-semibold leading-[44px] tracking-[-0.72px]">
						Empower Your Future with{" "}
						<span className="text-transparent bg-gradient-5 bg-clip-text">
							Coding Skills
						</span>
					</h1>
					<p className="text-base font-medium text-rich-black-300 leading-6">
						With our online coding courses, you can learn at your
						own pace, from anywhere in the world, and get access to
						a wealth of resources, including hands-on projects,
						quizzes, and personalized feedback from instructors.{" "}
					</p>
				</div>

				{/* CTA 2 */}
				<div className="space-x-6">
					<Button type="primary" className="font-medium">
						Learn More
					</Button>
					<Button type="secondary" className="font-medium">
						Book a Demo
					</Button>
				</div>
			</div>

			{/* Video */}
			<div className="max-h-[515px] max-w-[1035px] relative mx-auto">
				{/* Blob */}
				<div className="bg-gradient-3 rounded-full blur-3xl opacity-40 h-[295px] absolute w-[90%] -translate-x-1/2 top-0 left-1/2 "></div>
				
				{/* video */}
				<div 
					className="relative w-full h-0 pb-[52.656%]"
				>
					<iframe
						height="100%"
						src="https://streamable.com/e/18konw?autoplay=1&muted=1&nocontrols=1"
						width="100%"
						className="absolute top-0 left-0 w-full h-full overflow-hidden border-none rounded-lg shadow-video-white"
					></iframe>
				</div>
			</div>
		</div>
	);
}
