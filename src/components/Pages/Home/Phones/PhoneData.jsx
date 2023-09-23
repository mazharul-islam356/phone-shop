import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const PhoneData = () => {

    const phones = useLoaderData()
   

    
    
    return (
        <div className="grid grid-cols-3 gap-2">
            {
                phones.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
            }
        </div>
    );
};

export default PhoneData;