import { levelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";


export default function Section({ children }: {  children: any }) {
    const level = useContext(levelContext);
    return (
        <section className="section">
            <levelContext.Provider value={level +1}>
                {children}
            </levelContext.Provider>
        </section>
    );
}