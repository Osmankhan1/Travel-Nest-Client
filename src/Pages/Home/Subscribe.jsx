

const Subscribe = () => {
    return (
        <div className='mt-16 md:mt-48 '>
            <h1 className='text-[25px] md:text-[42px] font-bold text-center '>Subscribe & Get Special <span className='text-[#FF3811]'>Discount!</span></h1>
            <p className='text-center md:w-[500px] px-10 md:px-0 m-auto mt-5'>Don’t Wanna Miss Somethings? Subscribe Right Now And Get The Special Discount And Monthly Newsletter.</p>
            <div className='mb-32 flex justify-center mt-16'>
                <input className='p-3 md:p-6 rounded-l-xl bg-slate-100 md:w-[600px] border-none md:text-2xl' type="email" name='email' placeholder='Enter Your Email....' />
                <button className='p-4 md:p-7 rounded-r-xl text-white font-semibold md:text-2xl md:w-[240px] bg-[#FF3811] hover:bg-orange-700'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;