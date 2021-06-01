import React from 'react';

export default function SwitchButton() {
  return (
    <div className='custom-control custom-switch'>
      <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
      <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
    </div>
  )
}