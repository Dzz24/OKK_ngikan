import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/paliyang.jpg"
function RMPadangPP(){
    return (
        <>
            <WarungPageComponent
            judul= "Rumah Makan Padang Putra Paliyang"
            subJudul= "RM Padang Putra Paliyang berkonsep rumah makan padang rumahan, dimana menu yang disediakan juga khas rumah makan padang. Menu - menu nya sangat bergam, dibuat khas rumahan dengan cita rasa yang otentik, sehingga menarik untuk dibeli"
            harga="1.000 - 7.000"
            jamBuka="08.00 - 12.00"
            judulReview= "Review Rumah Makan Padang Putra Paliyang"
            detailReview= "Porsinya banyak dan enak, ayamnya besar. Tempatnya Bersih, kecil tapi mejanya besar besar. Karbohidrat : Nasi Protein : Telur barendo, Ayam serundeng, ayam gulai, ayam bakar Ikan goreng, kikilVitamin dan Mineral : Sayur Singkong, Sayur Nangka, kikil Serat : sayur singkong, sayur nangka"
            bgSrc={foto}
            makanan1="Telur Barendo"
            makanan2="Ayam Serundeng"
            makanan3="Ayam Gulai"
            makanan4="Sayur Singkong"
            harga1="Rp. 5000"
            harga2="Rp. 7000"
            harga3="Rp. 7000"
            harga4="Rp. 3000"
            />
        </>
    )
}
export default RMPadangPP