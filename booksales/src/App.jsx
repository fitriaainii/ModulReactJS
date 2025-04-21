import './App.css';

function App() {

  return (
    <>
      <div className="container">
        
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-shop" style={{color: "#74C0FC"}}></i>
              <span className='ms-2 fs-4'>Bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#books" className="nav-link px-2">Books</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-outline-primary me-2">Register</button>
          </div>
        </header>

        {/* Heros */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Bumi - Tere Liye</h1>
              <br />
              <p className="lead" style={{textAlign:"justify"}}>Novel dengan tebal 440 halaman ini, berkisah mengenai petualangan antarklan 
                dengan tokoh utamanya, yaitu Raib. Raib adalah generasi keturunan murni dari Klan Bulan dan ia 
                melakukan petualangan ke dunia paralel bersama dua sahabatnya, yaitu Seli dan Ali. Seli berasal dari 
                keturunan klan  Matahari, sementara Ali berasal dari klan Bumi atau tanah. Sebenarnya, mereka bertiga 
                merupakan anak remaja pada umumnya, tetapi di novel inilah awal dari segalanya terungkap.
              </p>
              <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg" alt="" width="390"/>
          </div>
          </div>
        </div>

        {/* Product List */}
        <section className="py-5 text-center container" id='books'>
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#books" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
        <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://online.fliphtml5.com/vpqsi/cqcc/files/shot.jpg" alt="" />
              <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Novel ini menceritakan perjalanan hidupnya sebagai mahasiswa Indonesia di Jerman, pencarian jati diri, spiritualitas, hingga perjuangan menjadi perempuan independen dan 
                  berpikiran terbuka. Cocok untuk kamu yang sedang mencari inspirasi hidup dan keberanian dengan pilihan sendiri.
                  <br /> <br /> 
                  <h6>Genre: Memoar / Inspiratif</h6>
                  </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 95.000</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="https://www.gramedia.com/blog/content/images/2018/12/Kata-Rintik-Sedu-1.jpg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Novel ini membawa pembaca menyelami kisah cinta remaja yang sederhana namun penuh makna. Tentang senja, kehilangan, dan kerinduan yang tak pernah selesai. 
                  Gaya penulisan yang puitis membuat tiap kalimatnya menenangkan dan mengiris di saat yang sama.
                  <br /> <br /> 
                  <h6>Genre: Romantis / Drama</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 100.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://www.gramedia.com/blog/content/images/2021/03/Cover_tikungan_maut_1-min.jpg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Seri kelima dari “Kisah Tanah Jawa” yang mengangkat kisah misteri dan horor urban dari Jawa. Tikungan Maut mengisahkan teror makhluk halus dan arwah penasaran di jalanan rawan kecelakaan.
                  Cerita ini dikemas dengan latar budaya Jawa dan pengalaman spiritual yang mencekam.
                  <br /> <br /> 
                  <h6>Genre: Horor / Misteri Budaya</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 80.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://www.gramedia.com/blog/content/images/2021/03/pulang-pergi_tere_liye.jpeg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Novel ini menyuguhkan kisah penuh aksi dan konspirasi tentang Bujang, seorang anak muda yang menjadi bagian dari dunia shadow economy. 
                  “Pulang - Pergi” membawa pembaca menjelajahi dunia gelap namun penuh nilai-nilai kehidupan.
                  <br /> <br /> 
                  <h6>Genre: Aksi / Drama</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 98.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://www.gramedia.com/blog/content/images/2022/06/Cantik-Itu-Luka.jpg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Sebuah novel epik dan surealis yang mengangkat sejarah, mitologi, dan realitas sosial Indonesia melalui kisah Dewi Ayu—seorang pelacur yang bangkit dari kubur. 
                  Buku ini penuh dengan simbolisme, ironi, dan kritik sosial yang tajam.
                  <br /> <br /> 
                  <h6>Genre: Realisme Magis / Sastra</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 120.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Novel fantasi yang menceritakan tentang petualangan dari tiga remaja: Raib, Seli, dan Ali yang menemukan dunia paralel bernama Dunia Pararel. Novel ini berisi penuh kejutan, misteri, dan nilai persahabatan. 
                  Cocok untuk pembaca muda maupun dewasa.
                  <br /> <br /> 
                  <h6>Genre: Fantasi / Petualangan Remaja</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 89.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://miro.medium.com/max/315/1*wecXN8wcetHoSM9xN0oDgA.jpeg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Karya monumental yang menjadi bagian pertama dari tetralogi Buru. Novel ini berlatar Hindia Belanda awal abad ke-20 dan mengikuti kisah Minke, seorang pribumi terpelajar, 
                  yang bergulat dengan identitas, kolonialisme, dan perjuangan sosialnya.
                  <br /> <br /> 
                  <h6>Genre: Sejarah / Sosial / Romansa</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 85.000</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://th.bing.com/th/id/OIP.tFrQQVAWSTySkOpjrvK7iQHaK-?w=540&h=800&rs=1&pid=ImgDetMain" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Menceritakan kisah cinta remaja antara Kugy dan Keenan yang diwarnai mimpi, seni, dan takdir. Novel ini menyuguhkan perjalanan emosional dua insan muda 
                  yang mencoba mewujudkan impian mereka sambil menemukan arti cinta sejati.
                  <br /> <br /> 
                  <h6>Genre: Romantis / Coming-of-Age</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 99.000</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg" alt="" />
            <div className="card-body">
                <p className="card-text"  style={{textAlign:"justify"}}>Sebuah karya dari tokoh besar pergerakan kemerdekaan Indonesia. Buku ini memperkenalkan cara berpikir ilmiah melalui materialisme, 
                  dialektika, dan logika sebagai alternatif dari mistisisme dan takhayul dalam masyarakat.
                  <br /> <br /> 
                  <h6>Genre: Filsafat / Politik / Pemikiran Kritis</h6>
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                </div>
                <small className="text-body-secondary">Rp 75.000</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

        {/* Our Team */}
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

        {/* Contact */}
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

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#books" className="nav-link px-2 text-body-secondary">Books</a></li>
              <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 Bookstore</p>
          </footer>
        </div>
    </div>
    </>
  );
}

export default App
