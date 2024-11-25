import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/cakHeri.jpg"
function SotoAyamHari(){
    return (
        <>
            <WarungPageComponent
            judul= "Soto Ayam Madura Cak Hari"
            subJudul= "Soto madura cak heri, dengan ikonnya yaitu soto madura yang khas. Makanan yang disajikan sangat khas dan  enak dengan tempat makannya yang luas dan bersih."
            harga="10.000 - 17.000"
            jamBuka="06.30 - 12.00"
            judulReview= "Review Soto Cak Heri"
            detailReview= "Makanannya Enak, rich, dan light. Tempatnya bersih dan ramai, disediakan air minum Karbohidrat : Nasi, koyaProtein : Ayam suir rebusVitamin dan Mineral : Kol, tauge, timun, jus buah-buahanSerat : Nasi, Timun, kol, Tauge"
            bgSrc={foto}
            makanan1="Ayam Suwir Rebus"
            makanan2="Kol"
            makanan3="Tauge"
            makanan4="Koya"
            harga1="Rp. 17000"
            harga2="Rp. 5000"
            harga3="Rp. 7000"
            harga4="Rp. 5000"
            />
        </>
    )
}
export default SotoAyamHari
