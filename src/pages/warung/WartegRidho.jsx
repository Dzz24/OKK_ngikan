import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/ridhobahari.jpg"
function WartegRidho(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Ridho Bahari"
            subJudul= "Warteg Ridho Bahari merupakan pilihan yang tepat jika ingin menikmati makanan yang enak, porsi pas, dan harga terjangkau. Tempatnya nyaman, sehingga jadi rekomendasi yang bagus untuk makan sehari-hari."
            harga="10.000 - 25.000"
            jamBuka="08.00 - 21.00"
            judulReview= "Review Warteg Ridho"
            detailReview= "Makanannya enak, bumbunya terasa pas dan tidak berlebihan. Ususnya empuk, telur dan kangkungnya segar. Semua rasa berpadu dengan baik, dan porsinya pas untuk makan siang yang praktis dan mengenyangkan. Tempatnya cukup sempit tetapi terjaga kebersihannya. Suasana di sini nyaman, cocok untuk makan santai. Terdapat meja yang cukup banyak, jadi kita tidak perlu khawatir jika datang saat jam makan ramai."
            bgSrc={foto}
            karbo="Karbohidrat: Nasi."
            protein="Protein: Telur, usus."
            lemak="Lemak: Usus."
            vitamin="Vitamin dan Serat: Kangkung"
            makanan1="Telur"
            makanan2="Usus"
            makanan3="Kangkung"
            makanan4="Tempe"
            harga1="Rp. 4000"
            harga2="Rp. 7000"
            harga3="Rp. 3000"
            harga4="Rp. 2000"
            />
        </>
    )
}
export default WartegRidho