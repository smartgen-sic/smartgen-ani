import React from "react";

import psikolog from './Group 239.png';
import gopay from './gopay.png';
import ovo from './ovo.png';
import dana from './Dana.png';

import "./index.css";

export default function Data() {
    return (
<body>
    <center>
    <div class="Smartgen"></div>
    <div class="back-icon">
    <i class="fas fa-chevron-left"></i></div>
    <h1>Smartgen</h1>
    <h5>Pembayaran Konsultasi Psikologi</h5>
    <img src= {psikolog} alt="udh milih psikolog" />
    <div class="sesi">
    <p> Total price</p> 
    <p>Session fee for 2 hours</p></div>
    <p class="price">Rp. 100.000</p>
    <p class="method">Payment method</p>
    <button type="button" class="gopay">
        <img src={gopay} alt="gopay" />
    </button>
    <button type="button" class="ovo">
        <img src={ovo} alt="ovo" />
    </button>
    <button type="button" class="dana">
        <img src={dana} alt="dana" />
    </button>
    </center>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

</body>
    
    );
}