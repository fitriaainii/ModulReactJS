import './App.css';

/**
 * Membuat component Header.
 * Component Header menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Content.
 * Component Content menampilkan konten utama
 */
function Content() {
  return <h1>Content</h1>;
}

/**
 * Membuat component Footer.
 * Component Footer menampilkan informasi hak cipta
 */
function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
  )
}

/**
 * Membuat Function Hello.
 * 
 */
function Hello() {
  const name = "Fitri";
  return (
    <>
      <h1>Hello</h1>
      <p>Selamat datang {name} di React JS</p>
    </>
  );
}

/**
 * Membuat Props Greeting.
 * 
 */
function Greeting(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

/**
 * Membuat Props Profile.
 *
 */
function Profile(props) {
  return (
    <div>
      <h1>My Profile</h1>
      <p>Nama: {props.name}</p>
      <p>Umur: {props.age}</p>
      <p>Alamat: {props.address}</p>
    </div>
  );
}


function App() {
  return (
    <>
    <Header />
    <Content />
    <Footer />
    <Hello />
    <Greeting name="Fitri" />
    <Greeting name="Siti" />
    <Profile name="Fitri" age={20} address="Jakarta" />
    </>
  );
}

export default App

