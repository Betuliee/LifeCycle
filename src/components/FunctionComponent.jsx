import { useEffect, useState } from "react";
import CustomButton from "./CustomButton/CustomButton";
import Row from "./Row/Row";

const Counter = () =>{

    // State tanimlama
    const [count, setCount] = useState(0);

    const [page, setPage] = useState(0);

    useEffect(() =>{
        console.log('Fonksiyon component ekrana basidi')
    }, [])
    
    useEffect(()=>{
        console.log('Bilesen guncellendi', count)
    })

    useEffect(() =>{
        console.log('Sayfa degisti', page)
    }, [page])

    useEffect(()=>{
        return(
            console.log('Fonksiyon component ekrandan gitti')
        )}, [])
    return(
        <div>
            <Row style={{width: '200px'}}>
            <CustomButton 
                buttonTitle={"Arttir"} 
                onClick={() => setCount(count+1)} 
            />
            <p>{count}</p>
            {count >= 0 && (
                            <CustomButton 
                            buttonTitle={"Azalt"} 
                            onClick={() => setCount(count-1)}
                        />
            
            )}
            </Row>
            <div>
                <p>Su an {page}. Sayfadasiniz</p>
                <button onClick={()=> setPage(page+1)}>
                    Sayfayi Degistir
                </button>
            </div>
        </div>
    )
};

export default Counter