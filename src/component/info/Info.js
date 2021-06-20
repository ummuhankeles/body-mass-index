import React from 'react';
import '../info/Info.css';

function Info() {
    return (
        <div className="info mb-5">
            <h3 className="info-header text-center mb-3">Vücut Kitle İndeksi Nedir?</h3>
            <p className="info-desc">Vücut kitle indeksi, vücut kütlesinin, uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen VKİ' nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir.</p>
        </div>
    )
}

export default Info;