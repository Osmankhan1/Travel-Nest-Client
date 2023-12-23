import { useEffect, useState } from "react";
import PackegeCart from "./PackegeCart";


const Packege = () => {
    const [packeges, setPackeges] = useState()

    useEffect(() => {
        fetch('packege.json')
            .then(res => res.json())
            .then(data => setPackeges(data))
    }, [])
    return (
        <div className="mt-40">
            <h1 className='text-[25px] md:text-[42px] font-bold text-center '>Our Awesome <span className="text-[#FF3811]">Packages</span></h1>
            <p className="w-[500px] text-center m-auto mt-4">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
            <div className="max-w-7xl mx-auto p-10 md:p-10 md:gap-4 lg:p-0  grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                {
                    packeges &&
                    packeges.map(packegeCart => <PackegeCart key={packegeCart.id} packegeCart={packegeCart}></PackegeCart>)
                }
            </div>
        </div>
    );
};

export default Packege;