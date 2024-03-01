import React from 'react';

function Card({ title, children }) {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <div className="text-gray-700 text-base">{children}</div>
        </div>
    );
}

export default function MyProfileV2() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Foto">
                <img
                    className="rounded-full mx-auto"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card title="Tentang">
                <p className="text-sm">Aklilu Lemma adalah seorang ilmuwan terkemuka dari Etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
            </Card>
        </div>
    );
}
