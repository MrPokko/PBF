// Pastikan Anda telah mengimpor Provider dan store dari react-redux
import { Provider } from 'react-redux';
import { store } from '../redux/store/store'; // Sesuaikan dengan lokasi store Anda


export default function App() {
    return (
        <Provider store={store}>
            <LoginCheck />
        </Provider>
    );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux/auth/authSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import parse from 'html-react-parser';

export function LoginCheck() {
    const { isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handleAuth(type) {
        const loginStatus = type === 'login';
        dispatch(setLogin({ isLogin: loginStatus }));
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                            {isLogin ?
                                [
                                    parse('<div class="alert alert-success">Yay, berhasil login!!!</div>'),
                                    <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log out</button>
                                ]
                                :
                                [
                                    parse('<div class="alert alert-dark">Anda telah logout!</div>'),
                                    <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
                                ]
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLogin } from '../redux/auth/authSlice';
// import "bootstrap/dist/css/bootstrap.min.css";

// export function LoginCheck() {
//     const { isLogin } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     function handleAuth(type) {
//         const loginStatus = type === 'login';
//         dispatch(setLogin({ isLogin: loginStatus }));
//     }
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="card mt-3">
//                         <div className="card-header">Status Login</div>
//                         <div className="card-body">
//                             {isLogin ?
//                                 <>
//                                     <div className="alert alert-success">Yay, berhasil login!!!</div>
//                                     <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log out</button>
//                                 </>
//                                 :
//                                 <>
//                                     <div className="alert alert-dark">Anda telah logout!</div>
//                                     <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
//                                 </>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//Jika Anda tidak menggunakan fungsi parse dari pustaka html-react-parser, maka kode Anda akan tetap berfungsi, tetapi Anda harus menyediakan HTML langsung sebagai string di dalam JSX. Berikut adalah cara Anda dapat mengimplementasikannya tanpa menggunakan parse: CODEEEE Dalam versi ini, Anda hanya menyertakan HTML langsung dalam JSX tanpa memanggil parse. Ini bekerja karena JSX memungkinkan Anda menyertakan HTML secara langsung. Namun, jika HTML yang ingin Anda gunakan disimpan sebagai string dan perlu diproses, maka Anda memerlukan parse.
