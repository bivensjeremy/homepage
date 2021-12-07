import Image from 'next/image'

const AboutMeHeader = () => {
    return (
        <section id="head-info">
            <div className="container-fluid row p-5">
                <div className="mx-auto col-lg-6">
                    <h1 className="text-center fw-bold">About Me</h1>
                    <p>I'm Jeremy. A freelance web developer and owner of Bivens Blueprint. My story is relatively simple: I started out in HR and have finally decided to pursue my dream of 1) doing what I enjoy & 2) doing it on my own terms. </p>
                    <p>My education is in Public Administration and my experience is in Human Resources. I've spent a lot of time in HR. Not because it is my passion, because it is where I have experience and I have bills! In no way do I dislike HR, it just isn't anywhere I want to retire. I've always enjoyed the dynamics of computers, building and creating things using tech. But I've never taken the steps to pursue an occupation in it. I guess I felt like I was too far into HR to start over. Through something of a mid-life crisis, I found the means and drive to step out into the world of web development. While I am most certainly very fresh in the field, I have a passion and dedication to learn what I need to know, and the creativity to produce a stellar project.</p>
                    <p>So, why Bivens Blueprint? Because I am more than a business.  I am a small business owner who is familiar with the needs of other business owners looking to scale and grow their businesses. I understand the importance of a website and its impact on your operations. I can go on forever, but the purpose of this section is to get to know me a tad. I will break out more detail into a blog section. </p>
                </div>

                <div className="col-lg-6">
                    <div className="card bg-transparent border-0">
                        <div className="triangle-down animated fadeInUp" />
                            
                        <div className="card-img-overlay">
                            <Image 
                                src="/images/profile.jpg"
                                layout="intrinsic"
                                width="290"
                                height="386"
                                alt="Image of Me"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeHeader;