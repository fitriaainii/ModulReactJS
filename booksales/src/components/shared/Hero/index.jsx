export default function Hero (){
    return (
        <>
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
        </>
    )
}