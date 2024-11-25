import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/nasinkri.jpg"
function NasiNKRI(){
    return (
        <>
            <WarungPageComponent
            judul= "Nasi NKRI"
            subJudul= "Nikmat, Kenyang, Rasa Indonesia. Warung ini berada di jalan ciseke dengan satu menu sebagai pemeran utamanya yang memiliki dua lauk utama yaitu ayam bakar dan ayam goreng. Nasinya gurih dengan tambahan mentega dan daun jeruk yang khas, bisa menambah lauk lain dengan harga satuan, warung juga menyediakan fasilitas delivery via whatsapp."
            judulReview= "Review Nasi NKRI"
            detailReview= "Enakk banget, nasi nya gurih rasa daun jeruknya jugaa lumayan kuatt. Terus sambelnya meskipun sedikit tapi pedes dan fresh bangett, ayamnya dibakar dengan baik ga sampai gosong. Bumbu meresap sampai dalam dan plusnya ayamnya dipotongin.Tempatnya Lumayan luas, didalam masih ada meja. lumayan bersih dan live cooking yaa. Karbohidrat: Nasi daun jeruk, nasi putih. Protein: Tahu, ayam, tempe, dan telur mata sapi.Lemak: sambal, dan telur mata sapi.Vitamin dan Mineral: Tahu, tempe, sambal, lalapan.Serat: lalapan, nasi daun jeruk."
            bgSrc={foto}
            harga="Rp. 1000 - 15.000"
            jamBuka="10.00 - 21.00"
            makanan1="Nasi Daun Jeruk"
            makanan2="Lalapan"
            makanan3="Tahu Tempe"
            makanan4="Nasi Telur Mata Sapi"
            harga1="Rp. 15.000"
            harga2="Rp. 3.000"
            harga3="Rp. 1.000"
            harga4="Rp. 10.000"
            />
        </>
    )
}
export default NasiNKRI