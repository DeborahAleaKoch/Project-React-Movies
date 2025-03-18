const Footer = () => {
	return (
		<footer className='footer sm:footer-horizontal footer-center bg-slate-400 text-base-content p-4'>
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by ACME
					Industries Ltd
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
