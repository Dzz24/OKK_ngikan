import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/pratama.jpg"
function WartegPratama(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Pratama"
            subJudul= "Secara keseluruhan, Warteg Pratama sangat direkomendasikan. Makanannya enak dengan porsi yang pas, tempatnya bersih dan nyaman. Cocok untuk yang cari makan murah tapi berkualitas, rasanya pun enggak kalah dengan tempat makan mahal."
            harga="10.000 - 25.000"
            jamBuka="10.00 - 21.00"
            judulReview= "Review Warteg Pratama"
            detailReview= "Makanan di sini bener bener enak dan memuaskan. Nasi daun singkongnya gurih, tongkolnya segar dan dibumbui dengan baik, telur dan kerangnya juga lezat. Setiap menu punya rasa khas, seperti masakan rumah yang dibuat dengan perhatian, dan porsinya juga mengenyangkan. Tempatnya luas dan nyaman, cocok untuk makan sendiri atau bersama teman. Lingkungannya bersih dan rapi, jadi bikin betah untuk makan tanpa terburu-buru. Di dalam juga ada TV, jadi kita bisa sambil menonton untuk hiburan saat makan. Suasananya santai, membuat pengalaman makan jadi lebih asik."
            bgSrc={foto}
            karbo="Karbohidrat: Nasi daun singkong"
            protein="Protein: Tongkol, telur, kerang"
            lemak="Lemak: Telur"
            vitamin="Serat: Daun singkong"
            makanan1="Nasi Daun Singkong"
            makanan2="Tongkol"
            makanan3="Telur"
            makanan4="Kerang"
            harga1="Rp. 10.000"
            harga2="Rp. 8.000"
            harga3="Rp. 4.000"
            harga4="Rp. 8.000"
            />
        </>
    )
}
export default WartegPratama