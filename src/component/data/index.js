import React from "react";

import logo from './Group 163.png';

import "./index.css";

export default function Data() {
    return (
        <body>
             <div class="arrow">
    <i class="fas fa-chevron-left"></i>
  </div>
    <h1 class="tittle">SmartGen</h1>
    <div class= "logo">
    <img src = {logo} alt="Logo"/></div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">What's your name?</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your direct name" name="your direct name"onChange={ (event) => console.log ("onchange berubah")} />
      </div>
      <label for="exampleFormControlInput1" class="form-label-dua">What's your gender?</label>
    <div class="d-flex flex-row bd-highlight mb-3">
       <div class="p-2 bd-highlight" ></div>
       <button type="button" class="button-female">Female</button>
       </div>
       <div class="p-2 bd-highlight">
       <button type="button" class="button-male">Male</button>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="field-umur">How old are you?</label>
        <input type="text" class="text-field-umur" id="exampleFormControlInput1" placeholder="your age" name="your age" onChange={ (event) => console.log ("onchange berubah")} />
      </div>
    <button type="button" class="button-next-awal">Sign up</button>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

 </body>
    );
}