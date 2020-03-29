import React, { useState } from 'react';
import  _Input from './styled';

function Input() {

    const [value, setValue] = useState('');

  return (

    <_Input type="text" placeholder="Escribi un mensaje..." autoComplete="off" autoCorrect="off" autoCapitalize="off" maxLength='125' value={value} onKeyPress={e => { (event.key === 'Enter') &&  e.preventDefault();  }
              } onChange={(e) => (setValue(e.target.value))} spellCheck="false" />
 
  );
}

export default Input;
