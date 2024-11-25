function InputComment (){
    return (
        <div className="text-white text-opacity-40 font-smallfont-['Noto Sans'] bg-white bg-opacity-5 rounded-sm p-12 mt-20">
                <div className="flex gap-5">
                    <div>
                    <label htmlFor="Name">Name</label>
                    <div className="relative rounded-md shadow-sm">
                        <input type="text" className="bg-transparent ring-opacity-20 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  text-white text-opacity-60 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <div className="relative rounded-md shadow-sm">
                        <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="tell">Comment</label>
                    <input type="text" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md py-1.5 pb-16 pl-4 pr-96 text-white ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                </div>
                <div className="pt-6 flex justify-end mt-4">
                    <button type="button" className="focus:outline-none text-white rounded-sm bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium text-sm px-16 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900">Post Comment</button>
                </div>
            </div>        
    )
}
export default InputComment