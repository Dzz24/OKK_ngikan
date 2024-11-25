import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
function WarungPakAmir(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Pak Amir"
            subJudul= "pilihan tepat untuk sarapan atau makan siang ringan. Dengan harga terjangkau, makanan yang lezat, dan tempat yang nyaman, warung ini sangat direkomendasikan bagi siapa pun yang mencari hidangan enak tanpa harus merogoh kocek terlalu dalam. dengan harga 10.000 - 25.000 dan buka 06.00 - 14.00"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "Bubur ayamnya gurih dan teksturnya lembut, sangat cocok untuk sarapan. Tambahan telur membuat rasanya lebih kaya. Lontong kari dagingnya juga lezat, dengan bumbu kari yang meresap sempurna ke dalam daging, memberikan cita rasa yang mantap. Tempatnya sederhana namun nyaman, cocok untuk menikmati sarapan pagi. Kebersihannya terjaga, dan suasananya cukup tenang, cocok untuk makan dengan santai. Pelayanannya juga ramah dan cepat, jadi tidak perlu menunggu lama untuk menikmati makanan."
            imgSrc={foto}/>
        </>
    )
}
export default WarungPakAmir