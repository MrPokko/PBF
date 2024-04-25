import { levelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";

export default function Section2({ children, isFancy }: { children: any, isFancy: boolean }) {
    const level = useContext(levelContext);
    return(
        <section className={
            'section ' +
            (isFancy ? 'fancy' : '')
        }>
            <levelContext.Provider value={level + 1}>
                {children}
            </levelContext.Provider>
        </section>
    );
}