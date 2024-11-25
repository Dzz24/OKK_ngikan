import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/elthizy.jpg"
function WaroengSS(){
    return (
        <>
            <WarungPageComponent
            judul= "Waroeng SS"
            subJudul= "Lorem Ipsum dorom sit amet"
            harga="15.000 - 25.000"
            jamBuka="08.00 - 17.00"
            judulReview= "Review Waroeng SS"
            detailReview= "tempatnya luas dan lumayan nyaman, pelayannya gesit, makanannya semuanya enak, dan buah-buahannya masih segar. Karbohidrat : nasi putih. Protein : daging ayam, sapi, dan cumi. Lemak : daging ayam, sapi, dan cumi berbumbu teriyaki, bulgogi, rica-rica, dll. Vitamin dan Serat"
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
export default WaroengSS