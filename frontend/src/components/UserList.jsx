import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function UserList({ handleModal }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(null);
    
    async function fetchUsers() {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8800/?page=${page}&limit=10`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const result = await response.json();
            setUsers(result.data);
            setPagination(result.pagination);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchUsers();
    }, [page]);
    
    async function handleDelete(id) {
        try {
            const response = await fetch(`http://localhost:8800/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            
            const result = await response.json();
            alert(result.message);
            fetchUsers(); // Refresh the list
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    }
    
    function handlePageChange(newPage) {
        if (newPage > 0 && newPage <= pagination?.pages) {
            setPage(newPage);
        }
    }
    
    if (loading && !users.length) {
        return <div className="loading">Carregando...</div>;
    }
    
    if (error) {
        return <div className="error">Erro: {error}</div>;
    }
    
    return (
        <div>
            <div className="data-list">
                {users.length === 0 ? (
                    <div className="empty-list">Nenhum usuário encontrado</div>
                ) : (
                    users.map((user) => (
                        <div className="list-item" key={user.idusuarios}>
                            <span className="item">{user.idusuarios}</span>
                            <span className="item">{user.nome}</span>
                            <span className="item">{user.idade}</span>
                            <span className="item">{user.cpf}</span>
                            <div className="actions">
                                <Link to={`/user/${user.idusuarios}`} className="view-btn">Ver Detalhes</Link>
                                <button className="edit-btn" type="button" onClick={() => handleModal(user.idusuarios)}>Editar</button>
                                <button className="del-btn" type="button" onClick={() => handleDelete(user.idusuarios)}>Deletar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            {pagination && (
                <div className="pagination">
                    <button 
                        onClick={() => handlePageChange(page - 1)} 
                        disabled={page === 1}
                    >
                        Anterior
                    </button>
                    <span>Página {page} de {pagination.pages}</span>
                    <button 
                        onClick={() => handlePageChange(page + 1)} 
                        disabled={page === pagination.pages}
                    >
                        Próxima
                    </button>
                </div>
            )}
        </div>
    );
}
