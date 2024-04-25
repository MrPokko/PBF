import { Provider, useDispatch, useSelector } from 'react-redux';
import { tambahCounter, kurangCounter } from '../redux/counter/naikTurunSlice';
import { store } from '../redux/store/store'; // Sesuaikan dengan lokasi store Anda
export default function App() {
    return (
        <Provider store={store}>
            <CounterNaikTurun />
        </Provider>
    );
}
export function CounterNaikTurun() {
    const { totalCounter } = useSelector((state) => state.counter); // Menggunakan nama slice yang benar
    const dispatch = useDispatch();
    function tombolTambah() {
        dispatch(tambahCounter());
    }
    function tombolKurang() {
        if (totalCounter > 0) {
            dispatch(kurangCounter());
        } else {
            alert('minimal 0');
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3"> {/* Menambahkan spasi di antara "card" dan "mt-3" */}
                        <div className="card-header">Total Mobil Saya</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 mt-2">Jumlah :</div> {/* Mengubah "Jumah" menjadi "Jumlah" */}
                                <div className="col-2">
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" onClick={() => tombolKurang()}>
                                            -
                                        </button>
                                        <span className="form-control text-center">
                                            {totalCounter}
                                        </span>
                                        <button className="btn btn-outline-success" type='button' onClick={() => tombolTambah()}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
