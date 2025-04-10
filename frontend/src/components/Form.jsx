import React, { useState, useEffect } from 'react';
import '../App.css';

const Form = ({ userid, closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        cpf: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    // If editing, fetch user data
    useEffect(() => {
        if (userid !== -1) {
            fetchUserData(userid);
        }
    }, [userid]);
    
    const fetchUserData = async (id) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8800/${id}`);
            
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do usuário');
            }
            
            const userData = await response.json();
            setFormData({
                name: userData.nome,
                age: userData.idade,
                cpf: userData.cpf
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            let url = 'http://localhost:8800/';
            let method = 'POST';
            
            if (userid !== -1) {
                url = `http://localhost:8800/${userid}`;
                method = 'PUT';
            }
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error(userid !== -1 ? 'Falha ao atualizar usuário' : 'Falha ao criar usuário');
            }
            
            const result = await response.json();
            setSuccess(true);
            
            // Close the modal after 1.5 seconds
            setTimeout(() => {
                closeModal();
                // Refresh the page to show updated data
                window.location.reload();
            }, 1500);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-backdrop">
            <form className="form" onSubmit={handleSubmit}>
                <h3>{userid !== -1 ? 'Editar Usuário' : 'Adicionar Usuário'}</h3>
                
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">
                    {userid !== -1 ? 'Usuário atualizado com sucesso!' : 'Usuário criado com sucesso!'}
                </div>}
                
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Idade:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="button" onClick={closeModal} className="cancel-btn">Cancelar</button>
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Processando...' : 'Salvar'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;