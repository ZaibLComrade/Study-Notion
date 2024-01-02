export default function CodeIllustration() {
	return <div>
		<div className="flex p-2 font-roboto leading-[22px] gap-2 relative backdrop-blur-xl border border-white/[.22] w-max bg-code">
			{/* blob */}
			<div className="bg-gradient-2 opacity-20 h-[260px] -top-[30px] -left-[30px] rounded-full blur-[34px] w-[370px] absolute debug"></div>
			
			{/* line numbers */}
			<div className="text-center text-rich-black-400">
				{ [...Array(11).keys()].map(k => k != 0 && <p key={ k }>{ k }</p>) }
			</div>
			
			{/* code */}
			<div className="text-rich-black-50">
				<div className="text-brown-100">&lt;!DOCTYPE html&gt;</div>
				<div>&lt;html&gt;</div>
				<div>&lt;head&gt;&lt;title&gt;Example&lt;/</div>
				<div>title&gt;&lt;link 
					<span className="text-pink-100"> rel=</span>
					<span className="text-pink-300">&quot;stylesheet&quot; </span>
					<span className="text-pink-100">href=</span>
					<span className="text-pink-300">&quot;styles.css&quot;</span>
					<span>&gt;</span>
				</div>
				<div>&lt;/head&gt;</div>
				<div>&lt;body&gt;</div>
				<div>&lt;h1&gt;
					<span>&lt;a 
						<span className="text-pink-100"> href=</span>
						<span className="text-pink-300">&quot;/&quot;</span>
							&gt;<span>Header</span>&lt;/a&gt;
					</span>&lt;/h1&gt;
				</div>
				<div>
					<div>
						<span>&lt;nav&gt;</span>
						<span>&lt;a  
						<span className="text-pink-100"> href=</span>
						<span className="text-pink-300">&quot;one&quot;
						</span>/&gt;</span>
						<span>One</span>
						<span>&lt;/a&gt;</span>
					</div>
					<div>
						<span>&lt;a </span>
						<span className="text-pink-100">href=</span>
						<span className="text-pink-300">&quot;two&quot;</span>
						<span>&gt;</span>
						<span>Two</span>
						<span>&lt;/a&gt;</span>
					</div>
					<div>
						<span>&lt;a </span>
						<span className="text-pink-100">href=</span>
						<span className="text-pink-300">&quot;three&quot;</span>
						<span>&gt;</span>
						<span>Three</span>
						<span>&lt;/a&gt;</span>
					</div>
				</div>
			</div>
		</div>
	</div>
}
