import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function SupaLogic() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("M_Tees").select();
    setInstruments(data);
  }

  return (
    <ul className="text-black">
      {instruments.map((instrument) => (
        <div key={instrument.style_number}>
            <li>{instrument.style_number}</li>
            <li>{instrument.product_name}</li>
            <img src={''} alt="icon works" />
            <li>{instrument.available_restock}</li>
            <li>{instrument.status}</li>
            <li>{instrument.description}</li>
        </div>
      ))}
    </ul>
  );
}

export default SupaLogic;