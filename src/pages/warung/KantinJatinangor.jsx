import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/20241108_150704.jpg"
function KantinJatinangor(){
    return (
        <>
            <WarungPageComponent
            judul= "Kantin Jatinangor"
            subJudul= "Tempat makan yang cocok untuk pelajar memenuhi kebutuhan nutrisinya. Bisa mengambil lauk dan nasi sendiri ala prasmanan."
            harga="2.000 - 7.000"
            jamBuka="06.00 - 20.30"
            judulReview= "Review Kantin Jatinangor"
            detailReview= "Rasanya rich, nasinya pule dan hangat. Luas dan bersih, minum bisa refill Karbohidrat: Nasi, Mie Protein: L Ayam goreng, ayam kecap, ayam rendang, ayam bakar, rolade (isian daging ayam), jamur crispy, ati ampela, sate ayam, pepes tahu, pepes ayam, bakso balado, ikan bandeng, telur goreng, tempe goreng, tahu goreng, tempe bacem Vitamin dan Mineral: Sayur sop, sayur brokoli, jamur crispy, ati ampela, ikan bandeng, telur goreng, tempe, tahu Serat: Sayur sop, sayur brokoli, jamur crispy, tempe, tahu"
            bgSrc={foto}
            makanan1="Ayam Goreng"
            makanan2="Ayam Kecap"
            makanan3="Ayam Katsu"
            makanan4="Ayam Bakar"
            harga1="Rp 7.000"
            harga2="Rp 7.000"
            harga3="Rp 7.000"
            harga4="Rp 7.000"
            />
        </>
    )
}
export default KantinJatinangor