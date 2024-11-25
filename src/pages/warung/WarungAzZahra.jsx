import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/zahra.jpg"
function WarungAzZahra(){
    return (
        <>
            <WarungPageComponent
            judul= "Warung az Zahra"
            subJudul= "Tempat makan ini menyajikan berbagai olahan makanan yang lengkap dan bergizi dengan harga 10 - 20rb. buka di jam 07.00 - 21.00 WIB"
            harga="10.000 - 20.000"
            jamBuka="07.00 - 21.00"
            judulReview= "Review Az Zahra"
            detailReview= "makanannya masih segar, untuk porsinya juga banyak, lauknya juga ukurannya besar serta rasanya standar. tempatnya agak kecil dan menjorok ke dalam. kurang pencahayaan sehingga rada gelap. Karbohidrat : nasi putih, mie gorengProtein : ayam goreng, kornet, ikan baladoLemak : sayur nangka, sayur jengkolVitamin : Tumis buncisMineral : Tumis kangkungSerat     : karedok leunca"
            bgSrc={foto}
            makanan1="Mie Goreng"
            makanan2="Ayam Goreng"
            makanan3="Tumis Buncis"
            makanan4="Tumis Kangkung"
            harga1="Rp. 10000"
            harga2="Rp. 15000"
            harga3="Rp. 10000"
            harga4="Rp. 10000"
            />
        </>
    )
}
export default WarungAzZahra