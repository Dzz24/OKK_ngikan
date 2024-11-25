import InputForm from "./InputForm"
function KotakInput(){
    return (
        <div className="text-white text-opacity-40 font-smallfont-['Noto Sans'] bg-white bg-opacity-5 rounded-sm p-12 ">
                <div className="flex gap-4">
                    <div>
                    <label htmlFor="Name">Name</label>
                    <InputForm/>
                    </div>
                    <div className="relative rounded-md shadow-sm">
                        <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border-0 py-1.5 pl-7 text-white ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="">
                    <label htmlFor="company">Company</label>
                    <InputForm/>
                    </div>
                    <div>
                        <label for="company_size" className="block leading-6 ">Company Size</label>
                        <div className="relative rounded-md shadow-sm">
                            <input type="text" name="price" id="price" className="block text-opacity-60 bg-transparent rounded-md border-0 py-1.5 pl-7 text-white ring-1 ring-inset ring-gray-300 ring-opacity-20  sm:text-sm sm:leading-6" />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <select id="company_size" name="company_size" className="h-full rounded-md bg-transparent py-0 pl-7 pr-20 text-gray-700 text-opacity-40 font-smallfont-['Noto Sans'] sm:text-sm">
                                    <option></option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                        </div>
                </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="tell">Tell Us Your Problem</label>
                    <input type="text" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md py-1.5 pb-11 pr-60 text-white ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                </div>
                <div className="pt-6 items-center mt-4">
                    <button type="button" className="focus:outline-none text-white rounded-sm bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium text-sm px-5 pl-40 pr-40 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900">Send Quote</button>
                </div>
            </div>
    )
}
export default KotakInput