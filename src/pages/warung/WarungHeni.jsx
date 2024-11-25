import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/heni.jpg"
function WarungHeni(){
    return (
        <>
            <WarungPageComponent
            judul= "Warung Heni"
            subJudul= "Rumah makan yang dijumpai menyediakan makanannya yang enak, penjualnya juga sangat ramah dan baik serta kadang juga suka bercerita. Untuk harga dari makanannya tidak terlalu mahal dan ramah dikantong anak indekos."
            harga="10.000 - 20.000"
            jamBuka="09.00 - 21.00"
            judulReview= "Review Warung Heni"
            detailReview= "makanannya cukup enak telur dadarnya besar dan tempe oreknya gurih tapi variasi sayurnya sedikit tetapi sudah menyajikan kualitas yang cukup makanannya juga ramah di kantong dan bisa dibeli dari seluruh kalangan mulai dari mahasiswa sampai pekerja-pekerja sekitar yang ingin mencari makan siang . tempatnya bersih dan cocok untuk mahasiswa, disarankan juga untuk makan bareng teman di tempat ini sempit. Mayoritas yang membeli makanannya juga pejalan kaki dan orang sekitar yang tinggal di lingkungan tersebut Karbohidrat :nasi,mie,sayur labu siamProtein :telur dadarLemak :tempe,mie,sambel terasiVitamin :-Mineral :air putihSerat :sayur labu siam"
            bgSrc={foto}
            makanan1="Mie Goreng"
            makanan2="Sayur Labu Siam"
            makanan3="Telur Dadar"
            makanan4="Tempe"
            harga1="Rp 10.000"
            harga2="Rp 15.000"
            harga3="Rp 10.000"
            harga4="Rp 2.000"
            />
        </>
    )
}
export default WarungHeni