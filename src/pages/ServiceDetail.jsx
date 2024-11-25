import Newnavbar from "../components/Newnavbar";
import gambar1 from "../assets/Images/Development Illustration.png"
import { Figma } from 'lucide-react';
import { Clock4 } from 'lucide-react';
import { Code } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Table2 } from 'lucide-react';
import { Zap } from 'lucide-react';
import PrepareBox from "../components/PrepareBox";
import Footer from "../components/Footer";
function ServiceDetail (){
    return (
        <>
        <Newnavbar/>
        <div className="">
            <div className="py-24">
                <p className="text-center text-teal-400 text-base font-semibold font-['Noto Sans'] leading-loose tracking-wider">DEVELOPMENT</p>
                <p className="text-center text-white text-4xl font-bold mt-4">Solve your company's<br />repetitive problems by<br />designing apps</p>
            </div> 
            <div className="flex justify-center gap-20 my-24">
                <div>
                    <img src={gambar1} alt="" />
                </div>
                <div>
                    <p className="">
                        Just tell us your repetitive problem or the primitive method used<br />today, and we will create a digital solution. <br />
                         <br />We can build you a website, a mobile app and a desktop app.Altext-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loosel <br />types of applications have a good security system, are easy to<br />maintain, and are high speed.</p>
                    <ul className="list-disc text-white text-base font-semibold font-['Noto Sans'] ml-6 mt-8">
                        <li>Avoid potential bugs with unit testing</li>
                        <li className="my-4">Removing unused code will speed up the application</li>
                        <li className="mb-4">The modern design pleases the users</li>
                        <li>A good UX will not disappoint users</li>
                    </ul>
                </div>
            </div>
            <div>
            <div className="py-24">
                <p className="text-center text-teal-400 text-base font-semibold font-['Noto Sans'] leading-loose tracking-wider">FEATURES</p>
                <p className="text-center text-white text-4xl font-bold mt-4">Here's what you will get when<br />purchasing this service</p>
            </div>
            <div className="flex justify-center gap-8">
            <div>
                <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <Figma color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">Design Files</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            </div>
            <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <Clock4 color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">Same Day</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <Code color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">Quality Code</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            </div>
            <div className="flex justify-center gap-8 mt-8">
            <div>
                <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <TrendingUp color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">SEO</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            </div>
            <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <Table2 color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">Responsive Design</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            <div className="bg-white bg-opacity-5 rounded-sm p-12 space-y-3">
                <Zap color="white" size={36}/>
                <p className="text-white text-base font-semibold font-['Noto Sans']">Blazing Fast</p>
                <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Projects are well designed<br />using Figma. You will get<br />the design file.</p>
                </div>
            </div>
            </div>
            <div>
                <div className="mt-48">
                <p className="text-center text-teal-400 text-base font-semibold font-['Noto Sans'] leading-loose tracking-wider">FAQ</p>
                <p className="text-center text-white text-4xl font-bold mt-4">Frequently asked questions,<br />maybe the same as yours</p>
                </div>
                <div className="flex justify-center gap-20 my-24">
                    <div className=" space-y-14">
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">How is the payment system?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">If the project has agreed, you will pay an advance, and when the <br />progress reaches 50% 
                                you will make a second payment, and <br />when the progress is 100% you will pay it off.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">What if the project stops halfway?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">We promise to always finish the project on time, if a problem <br /> occurs (because of our mistake), all payments will be refunded. <br /> And the project will be terminated.</p>
                                </div>
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">Will I get the source code?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">When the project is 100% complete, all the resources, such as <br /> design files, analysis diagrams, source code, etc. will be provided <br /> to you. You don't need to worry about this.</p>
                                </div>
                    </div>
                    <div className=" space-y-14">
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">Can I consult first?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">Of course you can consult us first. We are very happy to help <br /> your problems and provide our best solutions. You can contact <br />us via the contact page.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">Does it include servers and domains?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">You don't need to think about anything else, we have everything <br /> prepared. You just need to check your progress and make sure <br /> the features you want are the right one.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-white font-semibold ">Is there a warranty?</p>
                            <p className="text-white text-opacity-40 text-base font-medium font-['Noto Sans'] leading-loose">1 year warranty for our errors or mistakes. If you want to add a <br /> feature that is not included in the warranty, there is another fee per<br />feature, and the price depends on the difficulty.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                        <p className="text-white">Didn't find an answer?</p>
                        <p className="text-violet-700 font-bold border-b border-violet-700">Do not hesitate to ask!</p>
                </div>
                <PrepareBox/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default ServiceDetail