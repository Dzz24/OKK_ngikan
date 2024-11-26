import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/cakHeri.jpg"
function SotoAyamHari(){
    return (
        <>
            <WarungPageComponent
            judul= "Soto Ayam Madura Cak Hari"
            subJudul= "Soto madura cak heri, dengan ikonnya yaitu soto madura yang khas. Makanan yang disajikan sangat khas dan  enak dengan tempat makannya yang luas dan bersih."
            harga="10.000 - 17.000"
            jamBuka="06.30 - 12.00"
            judulReview= "Review Soto Cak Heri"
            detailReview= "Makanannya enak dengan cita rasa yang kaya namun tetap ringan, menjadikannya pilihan yang pas untuk berbagai selera. Tempatnya bersih dan selalu ramai, mencerminkan kualitas yang dipercayai banyak orang, serta dilengkapi dengan fasilitas air minum yang membuat pengalaman makan semakin nyaman "
            bgSrc={foto}
            karbo="Karbohidrat : Nasi, koya"
            protein="Protein : Ayam suir rebus"
            lemak="Vitamin dan Mineral : Kol, tauge, timun, jus buah-buahan"
            vitamin="Serat : Nasi, Timun, kol, Tauge"
            makanan1="Ayam Suwir Rebus"
            makanan2="Kol"
            makanan3="Tauge"
            makanan4="Koya"
            harga1="Rp. 17000"
            harga2="Rp. 5000"
            harga3="Rp. 7000"
            harga4="Rp. 5000"
            />
        </>
    )
}
export default SotoAyamHari
