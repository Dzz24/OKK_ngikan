import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
function WartegSariRasa(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Sari Rasa"
            subJudul= "Lorem Ipsum dorom sit amet"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "Enak, porsinya banyak dan harganya murah. Luas dan bersih, lauknya beraneka macam dan porsinya banyak ."
            imgSrc={foto}/>
        </>
    )
}
export default WartegSariRasa