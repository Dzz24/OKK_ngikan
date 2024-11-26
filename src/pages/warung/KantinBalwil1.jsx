import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/balwil.jpg"
function KantinBalwil1(){
    return (
        <>
            <WarungPageComponent
            judul= "Kantin Bale Wilasa 1"
            subJudul= "Kantinnya strategis karena masih berada di dalam wilayah kampus, makanan yang dijual pun cukup beragam, dan rasanya enak. Kantin ini banyak dikunjungi mahasiswa karena tidak hanya menjadi tempat asrama tetapi juga banyak fasilitas lain seperti tempat print."
            harga="1.000 - 12.000"
            jamBuka="05.00 - 21.00"
            judulReview= "Review Kantin Bale Wilasa"
            detailReview= "Makanannya enak, nasinya pulen dan hangat, ayam nya empuk, bumbunya pun enak, karedok nya dengan bumbu kacang enak, sayur taugenya pun segar. Makanannya enak, nasinya pulen dan hangat, ayam nya empuk, bumbunya pun enak, karedok nya dengan bumbu kacang enak, sayur taugenya pun segar. "
            bgSrc={foto}
            karbo="karbohidrat: nasi, mie, kentang, tempe. "
            protein="protein: ayam, telur, tahu, tempe."
            lemak="lemak: minyak yang ada dalam masakan."
            vitamin="vitamin: tumis sayur, sayur asem, lalapan."
            serat="serat: tumis sayur, sup, tempe"
            makanan1="Ayam"
            makanan2="Kentang"
            makanan3="Tempe"
            makanan4="Tumis Sayur"
            harga1="Rp. 8000"
            harga2="Rp. 5000"
            harga3="Rp. 2000"
            harga4="Rp. 3000"
            />
        </>
    )
}
export default KantinBalwil1