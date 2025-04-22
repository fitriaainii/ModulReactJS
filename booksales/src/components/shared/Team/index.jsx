export default function Team (){
    return (
        <>
            <section className="py-5 text-center container" id='team'>
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 border-bottom">Our Team</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">John Septhon</h3>
                    <h6>Chief Executive Officer</h6>
                    <p style={{textAlign:"justify"}}>
                        John is a visionary leader with over 15 years of experience in the publishing and e-commerce industries. 
                        His passion for books and innovation has shaped the company's mission to make quality literature accessible to everyone.
                    </p>
                </div>

                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">Sarah Lindberg</h3>
                    <h6>Head of Marketing</h6>
                    <p style={{textAlign:"justify"}}>
                        Sarah leads the marketing team with creativity and strategy. With a background in digital marketing and branding, she ensures every book finds its right audience.
                    </p>
                </div>

                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">David Kim</h3>
                    <h6>Lead Developer</h6>
                    <p style={{textAlign:"justify"}}>
                        David is the tech brain behind our platform. From optimizing user experience to developing innovative features, he’s dedicated to keeping our systems top-notch.
                    </p>
                </div>
                </div>
                </div>
            </section>
        </>
    );
}
