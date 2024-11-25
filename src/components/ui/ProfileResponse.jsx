export default function ProfileResponses({
    foto,
    nama,
    tanggal,
    comment,
    comment2,
    comment3
}){
    return (
        <div className="flex">
            <div className="">
                <img src={foto}alt="" />
            </div>
            <div className="ml-6">
                <p className="text-white text-base font-semibold font-['Noto Sans']">{nama}</p>
                <p className="text-white text-opacity-40 text-sm font-medium font-['Noto Sans'] leading-loose"> {tanggal} </p>
                <p className="text-white text-base font-medium font-['Noto Sans'] leading-loose mt-4"> {comment} </p>
                <p className="text-white text-base font-medium font-['Noto Sans'] leading-loose"> {comment2} </p>
                <p className="text-white text-base font-medium font-['Noto Sans'] leading-loose"> {comment3} </p>
            </div>
        </div>
    )
}