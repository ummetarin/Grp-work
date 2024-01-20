

const Aboutpart1 = () => {
    return (
        <div className="flex md:flex-row  flex-col gap-10 justify-center items-center">
            <div className="w-[470px]">
                <h1 className="md:text-4xl py-2 text-blue-700 font-bold">Get Better Health Care</h1>
                <p className="font-medium text-zinc-950 py-3 ">Welcome to Our Health Organization, where we are dedicated to advancing the well-being of individuals and communities through a commitment to excellence in healthcare and public health initiatives. Established with a passion for promoting a healthier world, our organization stands at the forefront of innovative and compassionate healthcare solutions.</p>
                <button className="btn bg-blue-800 text-white">Explore Us</button>
            </div>
            <div>
                <img className="w-[450px] h-[300px] rounded-lg " src="https://i.ibb.co/DWVtB2H/Doctors.jpg" alt="" />
            </div>
          </div>
    );
};

export default Aboutpart1;