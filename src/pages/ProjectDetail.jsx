import Footer from "@/components/Footer"
import Newnavbar from "@/components/Newnavbar"
import PrepareBox from "@/components/PrepareBox"
import ProjectCard from "@/components/ui/ProjectCard"

function ProjectDetail (){
    return (
        <>
        <Newnavbar/>
        <div>
            <div>
                <div className="my-24">
                    <p className="text-center text-teal-400 font-semibold font-['Noto Sans'] leading-loose tracking-wider">PROJECT DETAIL</p>
                    <p className="text-center text-white text-4xl font-bold mt-4">The Desktop App Landing <br /> Page</p>
                </div>
                <div className="flex justify-center gap-20">
                    <div className="w-2/5 rounded-t-lg bg-gray-800 bg-opacity-65 justify-between flex flex-col items-center h-96 ">
                        <div className=" flex flex-col items-center ">
                            <div className="w-48 rounded-full bg-gray-700  mt-8 h-8"></div>
                            <div className="w-32 rounded-full bg-gray-700 mt-2 h-8"></div>
                        </div>
                    <div className="w-72 rounded-t-3xl bg-gray-700 mt-2 h-52"></div>
                    </div>
                <div>
                    <p className=" text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Something has always existed. According to physics, there can <br /> never be true 
                        physical nothingness—though there can be times <br /> when existence resembles nothing.</p>
                    <p className=" text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose mt-10">CATEGORY</p>
                    <p className="text-white text-base font-semibold font-['Noto Sans']">Development</p>
                    <p className=" text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose mt-10">CLIENT</p>
                    <p className="text-white text-base font-semibold font-['Noto Sans']">Acme, Inc</p>
                    <p className=" text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose mt-10">TECHNOLOGY</p>
                    <p className="text-white text-base font-semibold font-['Noto Sans']">JavaScript, HTML, CSS</p>
                </div>
                </div>
                <div className="mt-72">
                    <p className="text-center text-teal-400 font-semibold font-['Noto Sans'] leading-loose tracking-wider">PROJECTS</p>
                    <p className="text-center text-white text-4xl font-bold mt-4">Other Amazing Projects</p>
                </div>
                <div className="grid  grid-cols-2 mt-24 mx-52">
                    <ProjectCard
                        h1="The Mobile App Landing Page"
                        p="A landing page for mobile app"
                        btn="Detail"
                     />
                    <ProjectCard
                        h1="The Desktop App Landing Page"
                        p="A landing page for dekstop app"
                        btn="Detail"
                     />
                </div>
            </div>
        </div>
        <PrepareBox/>
        <Footer/>
        </>
    )
}
export default ProjectDetail