/* import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
import Footer from "../component/footer";
import Header from "../component/Header";
import LeftAside from "../component/LeftAside";
import RightAside from "../component/RightAside";

export default function MyApp({ Component, pageProps }) {
    return (
              <>
                  <Header />
                  <main class="row">
                  <LeftAside />
                      <Component {...pageProps} />
                  <RightAside />
                  </main>
                  <Footer />
              </>
          );
  
  } */