import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchUserDetails() {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8800/${id}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Usuário não encontrado');
                    }
                    throw new Error('Erro ao carregar dados do usuário');
                }
                
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchUserDetails();
    }, [id]);
    
    if (loading) {
        return <div className="loading">Carregando detalhes do usuário...</div>;
    }
    
    if (error) {
        return (
            <div className="error-container">
                <div className="error-message">Erro: {error}</div>
                <Link to="/" className="back-link">Voltar para a lista</Link>
            </div>
        );
    }
    
    if (!user) {
        return (
            <div className="not-found">
                <h2>Usuário não encontrado</h2>
                <Link to="/" className="back-link">Voltar para a lista</Link>
            </div>
        );
    }
    
    return (
        <div className="user-detail">
            <h2>Detalhes do Usuário</h2>
            <div className="detail-card">
                <div className="detail-row">
                    <span className="detail-label">ID:</span>
                    <span className="detail-value">{user.idusuarios}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Nome:</span>
                    <span className="detail-value">{user.nome}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Idade:</span>
                    <span className="detail-value">{user.idade}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">CPF:</span>
                    <span className="detail-value">{user.cpf}</span>
                </div>
            </div>
            <Link to="/" className="back-link">Voltar para a lista</Link>
        </div>
    );
}
