// Components
import Logo from "../logo/Logo";
import FooterColumn from "./FooterColumn";

// Icons
import youtubeIcon from "../../assets/icons/Youtube.svg";
import facebookIcon from "../../assets/icons/Facebook.svg";
import googleIcon from "../../assets/icons/Google.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";

// Data
import links from "./footerLinks";

export default function Footer() {
	const { 
		company,
		resources,
		support,
		plans,
		community,
		subjects,
		languages,
		career,
	} = links
	
	return <footer className="px-32 border border-b-0 border-x-0 bg-rich-black-800 font-inter py-14 border-t-rich-black-600">
		<div className="flex">
			{/* Main Footer Content */}
			<div className="grid grid-cols-3 gap-x-3">
				{/* Col 1 */}
				<div className="space-y-3">
					<Logo type="dark"/>
					<FooterColumn title="Company" listArr={ company }/>
					<div className="flex gap-x-3">
						<img src={ facebookIcon }/>
						<img src={ googleIcon }/>
						<img src={ twitterIcon }/>
						<img src={ youtubeIcon }/>
					</div>
				</div>
				
				{/* Col 2 */}
				<div className="space-y-9">
					<FooterColumn title="Resources" listArr={ resources }/>
					<FooterColumn title="Support" listArr={ support }/>
				</div>
				
				{/* Col 3 */}
				<div className="space-y-9">
					<FooterColumn title="Plans" listArr={ plans }/>
					<FooterColumn title="Community" listArr={ community }/>
				</div>
			</div>
			
			<div className="divider divider-horizontal h-[500px]"></div>
			
			{/* Courses */}
			<div className="grid grid-cols-3 gap-x-3">
				{/* Col 1 */}
				<FooterColumn title="Subjects" listArr={ subjects }/>
				
				{/* Col 2 */}
				<FooterColumn title="Languages" listArr={ languages }/>
				
				{/* Col 3 */}
				<FooterColumn title="Career building" listArr={ career }/>
			</div>
		</div>
		
		<div className="divider"></div>
		
		{/* Botton Footer */}
		<div className="flex justify-between">
			{/* Essentials */}
			<div>
				<ul className="flex justify-center gap-2 leading-[22px] text-sm font-medium text-rich-black-300">
					<li><a href="#">Privacy Policy</a></li>
					<span className="text-rich-black-700">|</span>
					<li><a href="#">Cookie Policy</a></li>
					<span className="text-rich-black-700">|</span>
					<li><a href="#">Terms</a></li>
				</ul>
			</div>
			
			{/* Copyright */}
			<div>
				<p>Made by <span className="text-pink-200">♥</span> Zaib © 2023 Studynotion</p>
			</div>
		</div>
	</footer>
}
