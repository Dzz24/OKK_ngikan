import { ArrowRight } from 'lucide-react';
function Servicebutton (){
    return (
        <div className='flex justify-end mr-8 mt-4'>
            <a href="/servicedetail" className="ml-4 text-white text-base font-semibold font-['Noto Sans'] leading-loose">Service Detail</a>
            <a href="/servicedetail" className='mt-1 ml-4'><ArrowRight color='white' size={24}/></a>
        </div>
    )
}
export default Servicebutton