import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/restu.jpg"
function WarungRestuMande(){
    return (
        <>
            <WarungPageComponent
            judul= "Warung Restu Mande"
            subJudul= "Rumah makan padang dengan menu masakan padang khas yang enak dan beragam. Sangat worth to try ! "
            harga="3.000 - 37.000"
            jamBuka="09.00 - 21.30"
            judulReview= "Review Restu Mande"
            detailReview= "tempatnya sangat nyaman, ada sofa juga, dan makanannya enak.   "
            bgSrc={foto}
            karbo="Karbohidrat : nasi, kentang balado, perkedel."
            protein="Protein : ayam, cumi, ikan, tahu, tempe, telur."
            lemak="Vitamin dan Mineral : sayur nangka, daun singkong"
            makanan1="Nasi Telur Balado"
            makanan2="Nasi Telur Dadar"
            makanan3="Nasi Rendang Sapi"
            makanan4="Nasi Ayam Bakar"
            harga1="Rp. 13000"
            harga2="Rp. 16000"
            harga3="Rp. 24000"
            harga4="Rp. 23000"
            />
        </>
    )
}
export default WarungRestuMande