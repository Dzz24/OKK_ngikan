import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
function WartegSumberBerkah(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Sumber Berkah"
            subJudul= "Lorem Ipsum dorom sit amet"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "Bubur ayamnya gurih dan teksturnya lembut, sangat cocok untuk sarapan. Tambahan telur membuat rasanya lebih kaya. Lontong kari dagingnya juga lezat, dengan bumbu kari yang meresap sempurna ke dalam daging, memberikan cita rasa yang mantap. Tempatnya sederhana namun nyaman, cocok untuk menikmati sarapan pagi. Kebersihannya terjaga, dan suasananya cukup tenang, cocok untuk makan dengan santai. Pelayanannya juga ramah dan cepat, jadi tidak perlu menunggu lama untuk menikmati makanan."
            imgSrc={foto}/>
        </>
    )
}
export default WartegSumberBerkah