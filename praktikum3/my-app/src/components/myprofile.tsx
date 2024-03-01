// import { getImageUrlV2 } from '../utils/utils';

// interface Person {
//     name: string;
//     imageId: string;
// }

// function MyAvatar({ person, size }: { person: Person; size: number }) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrlV2(person, 'b')}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// export default function MyProfile() {
//     return (
//         <MyAvatar
//             size={40}
//             person={{
//                 name: 'Gregorio Y. Zara',
//                 imageId: '7vQD0fP'
//             }}
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

    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, imageSize)} // Menggunakan imageSize untuk menentukan ukuran gambar
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
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}
