// import { getImageUrlV2 } from '../utils/utils';

// interface Person {
//     name: string;
//     imageId: string;
// }

// function MyAvatar({ person, size }: { person: Person; size: number }) {
// function MyAvatar({ person, size }) {
//     return (
//         <img
//             className="avatar"
@@ -28,23 +23,15 @@
//         />
//     );
// }


import { getImageUrlV2 } from '../utils/utils';

interface Person {
    name: string;
    imageId: string;
}

function MyAvatar({ person, size }: { person: Person; size: number }) {
    // Menentukan ukuran gambar berdasarkan nilai prop size
    const imageSize = size < 90 ? 's' : 'b';
function MyAvatar({ person, size }) {
    const imageSize = size < 90 ? 's' : 'b'; 

    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, imageSize)} // Menggunakan imageSize untuk menentukan ukuran gambar
            src={getImageUrlV2(person, imageSize)} // Use determined image size
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
export default function MyProfile() {
    return (
        <MyAvatar
            size={40}
            size={90}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}