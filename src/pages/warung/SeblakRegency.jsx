import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/regency.jpg"
function SeblakRegency(){
    return (
        <>
            <WarungPageComponent
            judul= "Seblak Regency"
            subJudul= "tempat makannya menjual berbagai makanan, seafood, tahu, dan masih banyak lagi, tempat makannya pun bersih dan nyaman"
            harga="10.000 - 20.000"
            jamBuka="09.00 - 19.30"
            judulReview= "Review Seblak Regency"
            detailReview= "Makanannya enak, tahunya crispy, bumbunya semua kerasa enak. tempat makannya bersih dan nyaman. karbohidrat: mie, kwetiaw, bihun, makaroni, tahu, aciprotein: telur, ceker, kikil, ayam, otak-otak, cumi, udanglemak: saus mentegavitamin: pakcoy, kangkung, toge, jamur, brokoli, tahumineral: sayuran, tahuserat: sayuran"
            bgSrc={foto}
            makanan1="Kwetiaw"
            makanan2="Bihun"
            makanan3="Makaroni"
            makanan4="Tahu Cabe Garam"
            harga1="15.000"
            harga2="15.000"
            harga3="15.000"
            harga4="15.000"
            />
        </>
    )
}
export default SeblakRegency