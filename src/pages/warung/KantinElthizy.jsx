import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/elthizy.jpg"
function KantinElthizy(){
    return (
        <>
            <WarungPageComponent
            judul= "Kantin Elthizy"
            subJudul= "Secara keseluruhan tempat makan ini bisa dibilang cocok untuk anak kos karena porsinya yang banyak serta harganya yang terjangkau."
            harga="15.000 - 25.000"
            jamBuka="08.00 - 17.00"
            judulReview= "Enaknya Sampe bikin mau Meninggal"
            detailReview= "Makanan nya memiliki porsi yang sangat banyak sehingga bisa disimpan untuk lain waktu dan rasanya juga enak, ada menu lain juga seperti seafood dan ada menu sayur juga. Tempat makan ini cukup strategis karena dekat dengan jalan raya, tapi agak gelap tempatnya. Karbohidrat : nasi putih. Protein : daging ayam, sapi, dan cumi. Lemak : daging ayam, sapi, dan cumi berbumbu teriyaki, bulgogi, rica-rica, dll."
            bgSrc={foto}
            makanan1="Daging Ayam"
            makanan2="Daging Sapi"
            makanan3="Daging Cumi"
            makanan4="Kangkung"
            harga1="15.000"
            harga2="15.000"
            harga3="15.000"
            harga4="5.0000"
            />
        </>
    )
}
export default KantinElthizy