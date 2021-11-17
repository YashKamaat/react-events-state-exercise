import { useState } from 'react';
//Bonus

const Bonus = () => {
const letters =
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const [change, newLetter] = useState(0);
//OR
// const [index, setIndex] = useState(0);
return(
    <div>
<h1>{letters[change]}</h1>

<button onClick={() => newLetter(change + 1)} > NEXT LETTER</button>
</div>
    );
}

export default Bonus;