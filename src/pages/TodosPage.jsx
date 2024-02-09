import { useEffect, useState } from "react"
import CustomButton from "../components/CustomButton/CustomButton";

function TodosPage() {

    const [todos, setTodos] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        console.log('Bagimliliksiz çalisti')
        fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        console.log('Bagimlilikli çalisti')
        fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
    }, [page]);

    console.log(todos)
    return (
        <div>
            {todos.length === 0 && <div>Yukleniyor </div>}

            <div>
                <p>Baslik: {todos?.title}</p>
                <p>Kullanici Bilgisi: {todos?.id}</p>
                <p>Tamamlanma Durumu: {todos?.completed === true ? 'Tamamlandi' : 'Tamamlanmadi'}  </p>
            </div>
            <CustomButton buttonTitle={'Todos Geç'} onClick={() => setPage(page + 1)}></CustomButton>
        </div>
    )
}

export default TodosPage