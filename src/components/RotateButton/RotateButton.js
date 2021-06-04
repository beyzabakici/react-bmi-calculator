import React from 'react';
import { useHistory } from "react-router-dom";
import './RotateButton.css'

export default function RotateButton({title, rotate}) {
  const history = useHistory();
  return(
      <button className='button' onClick={() => history.replace(`/${rotate}`)}>
       {title}
      </button>
  );
}