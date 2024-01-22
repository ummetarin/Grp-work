import AboutDoc from "./AboutDoc";
import AboutServices from "./AboutServices";
import Aboutpart1 from "./Aboutpart1";
import Aboutpart2 from "./Aboutpart2";


const AboutUs = () => {
    return (
        <div>
            <Aboutpart1></Aboutpart1>

            <div className="flex md:flex-row flex-col justify-center gap-10 py-24 mx-auto items-center" >
            <div className="bg-[#E1EEFF] text-[#0360D9]  w-[350px] h-[200px] text-center items-center justify-center rounded-lg  ">
                 <h1 className="md:text-xl font-bold pt-6 pb-2 ">Health Care Organization</h1>
                 <p className="text-sm text-[#2E2E2E] font-medium pb-2 px-4">A healthcare organization is a complex system that delivers medical services, including hospitals, clinics, and primary care facilities. </p>
                <div className="py-2">

                <button className="text-white  rounded-full w-[120px] bg-[#0360D9] btn  font-bold  "> Lets Explore</button>
                </div>
               </div>
               <div className="bg-[#E1EEFF]  w-[350px] h-[200px] text-center items-center justify-center   rounded-lg">
                 <h1 className="text-2xl font-bold  text-[#0360D9] py-3 pt-16 ">Emergency Call</h1>
                 <div  className="flex flex-row justify-center items-center ">
                 <p className="text-sm font-medium pb-2 text-[#021526]">+8801834345678</p>
                 <img className="h-8" src="https://i.ibb.co/sPM1cy7/pngtree-phone-icon-in-solid-circle-png-image-2380227-removebg-preview.png" alt="" />
                 </div>
               </div>

            </div>
         
         

        <div>
           <h1 className="md:text-4xl font-bold text-center text-[#0360D9] pb-6">Best Doctors Available <span className="text-[#021526]">In Our Health Care</span></h1>
           <p className=" text-sm md:px-36 text-center font-medium pb-12   text-[#2E2E2E]">Our doctors, whether general practitioners or specialists, are highly trained medical professionals dedicated to providing patient-centered care. They undergo extensive education and training, staying updated on the latest medical advancements. Beyond diagnosing and treating illnesses, doctors emphasize preventive care to promote overall health. They work collaboratively with patients, employing empathy and communication skills to ensure a holistic approach to healthcare. </p>
        <AboutDoc></AboutDoc>
        </div>
       {/* rel */}
        <AboutServices></AboutServices>
        <Aboutpart2></Aboutpart2>
        </div>
    );
};

export default AboutUs;