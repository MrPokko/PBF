// import { getImageUrlV2 } from '../utils/utils';

// function MyAvatar({ person, size }) {
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

function MyAvatar({ person, size }) {
    const imageSize = size < 90 ? 's' : 'b'; 

    return (
        <img
            className="avatar"
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
            size={90}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}
