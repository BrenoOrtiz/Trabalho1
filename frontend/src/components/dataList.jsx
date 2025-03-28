
import '../App.css';

export default function DataList(props) {
    
    async function handleDelete(id) { 
        const promise = await fetch(`http://localhost:8800/${id}`, {
            method: 'DELETE'
        })
        const response = await promise.json()
        await alert(response.message)
    }

    
    
    return (
        <div>
            <div className="data-list">
                
                {props.data.map((item) => (
                    <div className="list-item"  key={item.idusuarios}>
                        <span className="item">{item.idusuarios}</span>
                        <span className="item">{item.nome}</span>
                        <span className="item">{item.idade}</span>
                        <span className="item">{item.cpf}</span>
                        <button className="edit-btn" type="button" onClick={() => props.handleModal(item.idusuarios)}>Editar</button>
                        <button className="del-btn" type="button" onClick={() => handleDelete(item.idusuarios)}>Deletar</button>
                    </div>
                ))}
                    
            </div>
        </div>
    )
}
