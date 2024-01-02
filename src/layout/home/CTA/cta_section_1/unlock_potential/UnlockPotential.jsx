import Button from "../../../../../components/buttons/Button";
import CodeIllustration from "./CodeIllustration";

export default function UnlockPotential() {
	return <div className="py-[90px] flex">
		{/* Texts */}
		<div>
			<h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.72px]">Unlock your <span className="text-transparent bg-gradient-5 bg-clip-text text-rich-black-5">coding potential</span> with our online courses</h1>
			<p className="font-medium text-rich-black-300 leading-[24px]">Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
			
			{/* CTA */}
			<div>
				<Button>Try it Yourself</Button>
				<Button>Learn More</Button>
			</div>
		</div>
		
		{/* Image */}
		<div>
			<CodeIllustration/>
		</div>
	</div>
}
