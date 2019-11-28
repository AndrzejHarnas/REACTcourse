import React from 'react';

const validation = (props) => {

let textInfo ='';

if(props.textLenght > 5) {
  textInfo = `Długość podanego tekstu to: ${props.textLenght} - text wystarczająco długi`
}
else {
  textInfo =`Długość podanego tekstu to: ${props.textLenght} - text za krótki`
}

  return (

    <div>
    <p>{textInfo}</p>
    </div>

)

}

export default validation;
