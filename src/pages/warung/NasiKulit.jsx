import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
import nasiKulit from "../../assets/Images/kulit.jpg"
function NasiKulit(){
    return (
        <>
            <WarungPageComponent
            judul= "Nasi kulit pondok barokah"
            subJudul= "Nasi Kulit Pondok Barokah adalah pilihan tepat untuk kamu yang ingin menikmati hidangan lezat dan mengenyangkan dengan harga terjangkau. Kulit ayamnya gurih, sambalnya pas, dan suasana tempatnya juga nyaman."
            harga="10.000 - 25.000"
            jamBuka="07.00 - 22.00"
            judulReview= "Review Nasi Kulit"
            detailReview= "Nasi kulit ayam di sini benar-benar memanjakan lidah. Kulit ayamnya renyah dan gurih, dipadukan dengan sambal yang pedasnya pas. Ayamnya lembut dan kangkungnya segar, memberikan perpaduan rasa yang nikmat. Cocok untuk pecinta makanan berbumbu kuat dan gurih. Tempatnya bersih dan cukup nyaman, meskipun sederhana. Suasana di sini santai dan cocok untuk makan bersama teman atau keluarga. Pelayanannya ramah dan cepat, jadi tidak perlu menunggu lama untuk menikmati makanan."
            karbo="Karbohidrat : nasi"
            protein="Protein : ayam"
            lemak="lemak : kelapa parut, kulit ayam"
            vitamin="Vitamin dan mineral : ayam, sayur"
            serat="serat : sayur kangkung"
            imgSrc={foto}
            bgSrc={nasiKulit}
            makanan1="Nasi Ayam"
            makanan2="Kulit Ayam"
            makanan3="Kangkung"
            makanan4="Sambal"
            harga1 = "Rp. 15.000"
            harga2 = "Rp. 10.000"
            harga3 = "Rp. 10.000"
            harga4 = "Rp. 15.000"
            />
    
        </>
    )
}
export default NasiKulit