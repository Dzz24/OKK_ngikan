function PrepareBox(){
    return (
        <div className="flex justify-evenly gap-2 pt-52 ">
            <div className="text-3xl text-white font-bold pr-20">
                <p>We've prepared everything, it's time </p> 
                <p>for you to tell the problem</p> 
            </div>
            <div className="">
            <a href="/quote" className="focus:outline-none mr-6 text-white rounded-sm bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium text-sm px-5 pl-12 pr-12 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900">Send Quote</a>
            <a href="/contact" className=" bg-white bg-opacity-5 focus:outline-none bg-violet text-white hover:bg-white-800 focus:ring-4 focus:ring-violet-300 font-medium text-sm px-5 pl-12 pr-12 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900">Ask Us</a>
            </div>
        </div>
    )
}
export default PrepareBox