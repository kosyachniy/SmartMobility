import React from 'react'
import 'bulma/css/bulma.css'
// import 'bulma-extensions'
// import 'bulma-switch'
// @import 'bulma'
import 'bulma-extensions/bulma-switch/dist/css/bulma-switch.min.css'
import Owner from '../Owner'
// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
import './style.css'
// import './style.scss'



export default function Main() {
	return (
		<div>
			{/* <div className="field">
				<div>Owner</div>
				<input id="switchLarge" type="checkbox" name="switchLarge" class="switch is-large is-fullwidth"></input>
				<label for="switchLarge" class="is-fullwidth"></label>
				<div>Driver</div>
				{/* <label for="switchOutlinedDefault" style={ {marginRight: '10px'} }>Owner</label>
				<input id="switchOutlinedDefault" type="checkbox" name="switchOutlinedDefault" className="switch is-outlined is-large" onChange="checked" />
				<label for="switchOutlinedDefault">Driver</label> 
			</div> */}
			{/* <div class="wrap">
			<section>
    <div class="input-wrap">
      <input id="input-7" type="checkbox" checked="checked" />
      <label for="input-7">Select</label>
    </div> 
  </section>
  </div> */}

{/* 
<div class="wrap">

  <section>
    <div class="input-wrap">
      <input id="input-1" type="checkbox"/>
      <label for="input-1">Select</label>
    </div>
  </section>

  <section>
    <div class="input-wrap">
      <input id="input-2" type="checkbox"/>
      <label for="input-2">Select</label>
    </div> 
  </section>


  <section>
    <div class="input-wrap">
      <input id="input-3" type="checkbox"/>
      <label for="input-3">Select</label>
    </div> 
  </section>

  <section>
    <div class="input-wrap">
      <input id="input-4" type="checkbox"/>
      <label for="input-4">Select</label>
    </div> 
  </section>

  <section>
    <div class="input-wrap">
      <input id="input-5" type="checkbox"/>
      <label for="input-5">Select</label>
    </div> 
  </section>

  <section>
    <div class="input-wrap">
      <input id="input-6" type="checkbox"/>
      <label for="input-6">Select</label>
    </div> 
  </section>

  <section>
    <div class="input-wrap">
      <input id="input-7" type="checkbox" checked/>
      <label for="input-7">Select</label>
    </div> 
  </section>
  
</div> */}

			<div className="header">
			<div className="trig">
				Owner
				<label class="switch">
					<input type="checkbox" />
					<span className="slider round"></span>
				</label>
				Driver
			</div>
			</div>

			<Owner />
		</div>
	)
}