import bgImg from "../../../assets/bg-banner.png";
import Button from "../../../components/buttons/Button";
import arrowIcon from "../../../assets/icons/fi-arrow-small-right.svg";

export default function Banner() {
	return <div 
		className="text-center"
	>
		{/* Background Underlay */}
		<div 
			style={{ backgroundImage: `url('${bgImg}')` }}
			className="h-[100vh] debug w-full absolute z-[-1] opacity-20 mix-blend-soft-light"
		></div>
		
		{/* Content & CTA */}
		<div className="pt-[72px] space-y-9 max-w-[913px] container mx-auto">
			{/* CTA 1 */}
			<Button 
				rounded="9999px" 
				type="secondary" 
				paddingX={22}
				paddingY={10}
				className="flex items-center font-medium mx-auto gap-[10px]"
			>Become an Instructor <img src={ arrowIcon }/></Button>
			
			{/* Texts */}
			<div>
				<h1 className="text-4xl text-rich-black-5 font-semibold leading-[44px] tracking-[-0.72px]">Empower Your Future with <span className="text-transparent bg-gradient-skyblue bg-clip-text">Coding Skills</span></h1>
				<p className="text-base font-medium text-rich-black-300 leading-6">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
			</div>
			
			{/* CTA 2 */}
			<div className="space-x-6">
				<Button type="primary" className="font-medium">Learn More</Button>
				<Button type="secondary" className="font-medium">Book a Demo</Button>
			</div>
		</div>
		
		{/* Image */}
		<div>
		</div>
	</div>
}
