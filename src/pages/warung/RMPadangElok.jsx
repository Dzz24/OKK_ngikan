import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/rp_elok.jpg"
function RMPadangElok(){
    return (
        <>
            <WarungPageComponent
            judul= "RM Padang Elok"
            subJudul= "Rumah Padang Elok adalah rumah makan padang yang memiliki banyak menu makanan khas padang. Makananya memiliki rasa nya enak, cocok untuk mahasiswa karena memiliki menu yang beragam dan porsinya juga tergolong banyak."
            judulReview= "Review Rumah Padang Elok"
            detailReview= "makanannya enak-enak, di nasi padang nya ada kerupuk pangsit berbeda dengan rumah makan padang lainnya juga sudah dapat gratis minum, juga di beri bumbu/kuah yang melimpah . tempat makannya bersih, disediakan tempat cuci tangan dan sabunnya, juga disediakan tissue sehingga kebersihannya terjamin   "
            bgSrc={foto}
            karbo="Karbohidrat : nasi."
            protein="Protein : ayam gulai."
            lemak="Vitamin dan Serat : sayur nangka, daun singkong"
            harga="15.000 - 25.000"
            jamBuka="09.00 - Makanan Habis"
            makanan1="Ayam Sayur"
            makanan2="Rendang"
            makanan3="Ayam Gulai"
            makanan4="Ayam Cabe Merah"
            harga1="Rp. 17.000"
            harga2="Rp. 20.000"
            harga3="Rp. 17.000"
            harga4="Rp. 19.000"
            />
        </>
    )
}
export default RMPadangElok