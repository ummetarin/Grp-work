import BlogparrtApi from "./BlogparrtApi";

const Blogpagedetails = () => {
    return (
        <div className=" flex md:flex-row flex-col justify-center gap-5">
          <BlogparrtApi></BlogparrtApi>
           <div className="md:w-[300px] md:justify-normal justify-center md:items-start items-center flex flex-col ">
            <h1 className="text-xl pt-6 font-bold text-[#0360D9]  py-3">Be Social</h1>
              <div className="flex flex-row gap-3 items-center">
                <img className="h-12" src="https://i.ibb.co/mTJscNp/images-15-removebg-preview.png" alt="" />
                <img className="h-10" src="https://i.ibb.co/zVsthDj/download-removebg-preview.png" alt="" />
                <img className="h-12" src="https://i.ibb.co/M6PY072/10wmt-super-Jumbo-v4-removebg-preview.png" alt="" />
              </div>

              <h1 className="text-xl font-bold text-[#0360D9] py-3">Most Views</h1>
              <div>
                <div>
                    <img className="w-[250px] py-1" src=" https://i.ibb.co/BrmXjMX/download-14.jpg" alt="" />
                    <img className="w-[250px] py-1" src="https://i.ibb.co/8BddwHY/images-13.jpg" alt="" />
                    <img className="w-[250px] py-1" src="https://i.ibb.co/Y0SsXwP/images-14.jpg" alt="" />
                    <p></p>
                </div>
              </div>

              <h1 className="text-xl  font-bold text-[#0360D9]  py-3">Controversial topic</h1>
              <div>
                <div className="text-[#2E2E2E">
                   <p className="text-sm font-medium py-1">1.Tips for Talking About Delicate or Controversial Subjects with Patients</p>
                   <p className="text-sm font-medium py-1">2..The Controversy of Healthcare Rights – UAB Institute for Human Rights Blog</p>
                   <p className="text-sm font-medium py-1">3.The controversial history of the U.S. bishops' Catholic health care guidelines | America Magazine</p>

                    <p></p>
                </div>
              </div>
           </div>
        </div>
    );
};

export default Blogpagedetails;