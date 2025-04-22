export default function Contact() {
    return (
        <>
        <section className="py-5 text-center container" id='contact'>
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Contact</h1>
                <p className="lead text-body-secondary">
                    Punya pertanyaan seputar buku, pesanan, atau ingin rekomendasi bacaan? Tim kami siap membantu kamu! Hubungi kami melalui:
                    <br />
                    📩 Email Support
                    <br />
                    ✉️ support@bookstore.com
                    <br />
                    Balasan maksimal dalam 1x24 jam kerja.
                </p>
                <p>
                    Klik tombol di bawah untuk terhubung langsung dengan tim kami.
                    <br />
                    ⏰ Jam layanan: 09.00 - 17.00 WIB (Senin - Jumat)
                    <br />
                    <br />
                    <a href="mailto:support@bookstore.com" class="btn btn-primary m-2">Email Us</a>
                    <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-success">Chat on WhatsApp</a>
                </p>
            </div>
            </div>
        </section>
        </>
    );
}