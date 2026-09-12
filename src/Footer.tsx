import footer from './assets/logo-text.png'



export default function Footer() {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content mt-5 p-10">
                <aside>
                    <img src={footer} alt="" />
                    <p className='mt-4'>
                        Curated tools, technologies, and resources for developers building <br />
                        modern software.
                    </p>
                    <ul className='flex justify-around gap-2 mt-10 font-bold'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                    <div className="divider w-full h-0]"></div>
                    <h1 className='mt-7'>© 2026 Dev Stack. All rights reserved.</h1>
                </aside>
                <nav>
                    <h6 className="footer-title text-black font-bold">PRODUCT</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Techologist</a>
                    <a className="link link-hover">Projects</a>
                        
                </nav>

                <nav>
                    <h6 className="footer-title text-black font-bold">COMPANY</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>


                </nav>

                <nav>
                    <h6 className="footer-title text-black font-bold">LEGAL</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>

                    <ul className='flex justify-around gap-2 mt-40  mt-2'>
                        <li>Privacy</li>
                        <li>Terms</li>
                        
                    </ul>

                </nav>
            </footer>
        </div>
    )
}
