import { useState } from 'react'

const catIm = () => {
    const [catIm, setCatIm] = useState();
    return(
        <img src='./assets/cat-image.jgp' alt="Logo" />
    )
}
export default catIm