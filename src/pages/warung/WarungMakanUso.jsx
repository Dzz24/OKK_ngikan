import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/Ellipse 40.png"
function WarungMakanUso(){
    return (
        <>
            <WarungPageComponent
            judul= "Warung Makan Pak Uso"
            subJudul= "Tempat makan yang cocok untuk memenuhi kebutuhan nutrisi mahasiswa dengan lauk 2000 - 7000 da"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "terasa segar, enak dan mengenyangkan. Rapih, dapur terlihat higienis, tempat lauk disimpan tertutup"
            imgSrc={foto}/>
        </>
    )
}
export default WarungMakanUso