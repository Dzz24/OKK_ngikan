export default function Profile({
    foto,
    nama,
    tanggal,
    ket
}){
    return (
        <div className="flex">
            <div className="">
                <img src={foto}alt="" />
            </div>
            <div className="ml-6">
                <p className="text-white text-base font-semibold font-['Noto Sans']">{nama}</p>
                <div className="flex">
                    <p className="text-white text-opacity-40 text-sm font-medium font-['Noto Sans'] leading-loose"> {tanggal} </p>
                    <li className="list-disc text-white text-opacity-40 text-sm font-medium font-['Noto Sans'] leading-loose ml-4"> {ket} </li>
                </div>
            </div>
        </div>
    )
}