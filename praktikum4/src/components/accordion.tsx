import { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                Dengan populasi sekitar 2 juta orang, Almaty adalah kota terbesar di Kazakhstan. Dari tahun 1929 hingga 1997, kota ini menjadi ibu kota Kazakhstan.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                Nama "Almaty" berasal dari kata <span lang="kk-KZ">алма</span>,dalam bahasa Kazakh yang berarti "apel"dan sering diterjemahkan sebagai "penuh dengan apel". Sebenarnya, wilayah sekitar Almaty dipercaya sebagai asal usul apel, dan <i lang="la">Malus sieversii</i> liar dianggap sebagai kandidat yang mungkin menjadi nenek moyang apel domestik modern.
            </Panel>
        </>
    );
}

function Panel({title, children, isActive, onShow}) {
    return (
        <section className="panel order border-gray-700 p-2">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button className="bg-blue-400 text-xs text-white p-1 rounded m-2" onClick={onShow}>
                    Tampilkan
                </button>
            )}
        </section>
    );
}
