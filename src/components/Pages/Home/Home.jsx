import PhoneCard from "./Phones/PhoneCard";
import PhoneData from "./Phones/PhoneData";


const Home = () => {
    return (
        <div>
            <div className="h-[400px] text-3xl font-bold text-center mt-4 bg-green-300">
                Banner
            </div>

            <div>
           <PhoneCard></PhoneCard>
           <PhoneData></PhoneData>
            </div>


        </div>
    );
};

export default Home;