import Container from "./ui/Container"
import Newnavbar from "./Newnavbar"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <>
      <Newnavbar/>
        <main >
            <Container>
            {children}
            </Container>
        </main>
      <Footer/>
    </>
  )
}
