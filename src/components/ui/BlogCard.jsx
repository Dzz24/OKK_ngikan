export default function BlogCard({
    foto,
    judul,
    judul2,
    alias,
    alias2,
    profile
}){
    return (
        <div className="mb-4">
            <img src={foto} alt=""className=""/>
            <div className="bg-white bg-opacity-5 rounded-sm p-8">
            <p className="text-white text-lg font-bold font-['Noto Sans']">{judul}</p>
            <p className="text-white text-lg font-bold font-['Noto Sans']">{judul2}</p>
            <p className="text-white text-opacity-60 text-sm font-medium font-['Noto Sans'] mt-2">{alias}</p>
            <p className="text-white text-opacity-60 text-sm font-medium font-['Noto Sans'] mt-1">{alias2}</p>
            <p className="mt-8">{profile}</p>
            </div>
        </div>
    )
}