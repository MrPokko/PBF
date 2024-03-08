import { useState } from 'react';

export default function Form() {
    const [Jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Yay...Jawaban Benar!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(Jawaban);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setJawaban(e.target.value);
    }

    return (
        <>
            <h2>Tebak Nama Hewan</h2>
            <p>
                Hewan apa yang ditakuti Doraemon?
            </p>
            <form
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                onSubmit={handleSubmit}>
                <textarea
                    value={Jawaban}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    className="bg-blue-400 p-2 m-2 rou text-sm text-white"
                    disabled={
                        Jawaban.length === 0 ||
                        status === 'submitting'
                    }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error text-red-500 text-sm">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(Jawaban) {
    // Anggap kode ini melakukan *request* ke jaringan.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = Jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
                resolve();
            }
        }, 500);
    });
}



export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState('');
    const fullName =firstName+ ' '+lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        // setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        // setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Silahkan nama lengkap anda</h2>
            <label className="block w-full m-2">
                Nama depan:{' '}
                <input
                className="text-sm text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className="block w-full m-2">
                Nama belakang:{' '}
                <input
                className="text-sm text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Tiket Anda akan diberikan kepada: <b className="text-blue-600">{fullName}</b>
            </p>
        </>
    );
}

