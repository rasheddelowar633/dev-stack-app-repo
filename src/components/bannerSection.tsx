import bannerSection from "../assets/banner-stack.png";

export default function BannerSection() {
    return (
        <section className="w-full h-[500px]">
            <div className="hero min-h-screen bg-base-200">
                <div className="flex justify-between gap-44">

                   
                    {/* Banner Content */}
                    <div>
                        <h1 className="text-5xl font-bold">
                            Build Your Ideal
                            <br />
                            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="py-6">
                            Explore frontend, backend, database, and tooling options, <br />
                            compare them side by side, <br /> and put together the stack
                            that fits your next project.
                        </p>



                     <div className="grid grid-cols-2 gap-2 mt-20">
                           <button className="btn border-0 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-blue-600 hover:to-purple-700">
                            Explore Technologies
                        </button>
                        <button className="btn btn-primary">Learn More</button>
                     </div>
                    </div>

                            {/* Banner Image */}
                    <img
                        src={bannerSection}
                        alt="Development Stack"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />


                </div>
            </div>
        </section>
    );
}


