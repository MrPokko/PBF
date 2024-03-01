import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

export function Card({ children }: CardProps) {
function Card({ title, children }) {
    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <div className="text-gray-700 text-base">{children}</div>
        </div>
    );
}

export default function MyProfileV2() {
    return (
        <div>
            <Card>
                <h1>Foto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Foto">
                <img
                    className="avatar"
                    className="rounded-full mx-auto"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card>
                <h1>Tentang</h1>
                <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari Etiopia yang telah menemukan pengobatan alami untuk schistosomiasis.</p>
            <Card title="Tentang">
                <p className="text-sm">Aklilu Lemma adalah seorang ilmuwan terkemuka dari Etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
            </Card>
        </div>
    );
}