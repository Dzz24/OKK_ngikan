import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Sayang.jpg"
function KantinSayang(){
    return (
        <>
            <WarungPageComponent
            judul= "Kantin Sayang"
            subJudul= "Tempat makan yang cocok untuk pelajar dan murah. Bisa mengambil lauk dan nasi sendiri."
            harga="10.000 - 25.000"
            jamBuka="06.00 - 21.00"
            judulReview= "Review Kantin Sayang"
            detailReview= "makanannya masih segar dan enak serta banyak lauk yang disediakan. Tempat ini menyediakan banyak lauk dan untuk pengambilan makanan bisa ngambil sendiri, cocok untuk para pelajar "
            karbo="Karbohidrat : Mie, Nasi."
            protein="Protein : Tempe goreng, tahu goreng, tempe orek, ayam geprek, telur balado, telur ceplok, ikan goreng, bakwan udang"
            lemak="Vitamin dan Mineral : Sayur jamur, sayur kangkung, sayur wortel, telur, ikan"
            serat="Serat : Tempe, tahu, sayur jamur, sayur kangkung, sayur wortel, nasi, mie"
            bgSrc={foto}
            makanan1="Tempe Goreng"
            makanan2="Tahu Goreng"
            makanan3="Ikan Goreng"
            makanan4="Telur Balado"
            harga1="Rp. 1000"
            harga2="Rp. 1000"
            harga3="Rp. 8000"
            harga4="Rp. 8000"
            />
        </>
    )
}
export default KantinSayang