import { useEffect } from 'react'

const CustomButton = ({buttonTitle,onClick}) => {

    useEffect(()=>{
        console.log("Ekrana geldi")
    return(
        console.log('Ekrandan gitti')
    )
    },[])

  return (
    <button onClick={onClick}>{buttonTitle}</button>
  )
}

export default CustomButton
