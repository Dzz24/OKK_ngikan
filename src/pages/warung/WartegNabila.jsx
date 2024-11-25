import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
function WartegNabila(){
    return (
        <>
            <WarungPageComponent
            judul= "Warteg Nabila"
            subJudul= "Tempat makan yang bagus dan cocok untuk kantong pelajar dengan range harga Rp10.000 - 25.000, buka dari jam 07.00 - 21.00 WIB"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "makanannya standar dan emang cocok buat mahasiswa atau pelajar karena harganya termasuk murah, masih segar dan banyak gizinya. tempatnya bagus dan menyediakan banyak makanan, ada tempat refill air gratis juga"
            imgSrc={foto}/>
        </>
    )
}
export default WartegNabila