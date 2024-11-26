import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/nasiUmi.jpg"
function WarungNasiUmi(){
    return (
        <>
            <WarungPageComponent
            judul= "Warung Nasi Umi"
            subJudul= "secara keseluruhan warung nasi bu umi merupakan tempat makan yang strategis dan langganan untuk mahasiswa. Harganya yang ramah, menunya yang bervariasi, dan bergizi menyebabkan tempat ini patut dikunjungi dengan harga 10 - 20rban dan buka jam 06.00 - 15.00 WIB"
            harga="10.000 - 20.000"
            jamBuka="06.00 - 15.00"
            judulReview= "Review Warung Nasi Umi"
            detailReview= "makanannya enak dan masih seger, harganya juga terjangkau dan ramah untuk mahasiswa. tempatnya agak kecil dan terbuka ke jalan umum jadi agak berdebu. Di tempatnya juga disediakan peralatan makan dan tisu."
            bgSrc={foto}
            karbo="Karbohidrat : Nasi putih."
            protein="Protein : ayam balado, ikan goreng, telur balado."
            lemak="Lemak : kulit ayam, sambal."
            vitamin="Vitamin : sayur capcay, tumis buncis."
            serat="Serat : sayur capcay, sayur jamur"
            makanan1="Ayam Balado"
            makanan2="Ikan Goreng"
            makanan3="Telur Balado"
            makanan4="Kulit Ayam"
            harga1="Rp. 15000"
            harga2="Rp. 17000"
            harga3="Rp. 10000"
            harga4="Rp. 12000"
            />
        </>
    )
}
export default WarungNasiUmi