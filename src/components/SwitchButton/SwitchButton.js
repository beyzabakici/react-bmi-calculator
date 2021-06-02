import React from 'react';
import './SwitchButton.css'

export default function SwitchButton() {
  return (
    <div className='custom-control custom-switch switch-container'>
      <label className='switch-tag'>kg/m</label>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <label className='switch-tag'>Ibs/in</label>
    </div>
  )
}