import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserListView from "./components/UserListView";
import UserDetail from "./components/UserDetail";
import Form from "./components/Form";
import { useState } from "react";

function App() {
    const [modal, setModal] = useState(false);
    const [editUserID, setEditUserID] = useState(-1);

    function toggleModal(userId) {
        setModal(!modal);
        setEditUserID(userId);
    }

    return (
        <Router>
            <div className="App">
                <h1>CRUD App Breno</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="actions-bar">
                                    <button
                                        className="add-btn"
                                        type="button"
                                        onClick={() => toggleModal(-1)}
                                    >
                                        Adicionar
                                    </button>
                                    <Link to="/view" className="view-link">
                                        Visualização
                                    </Link>
                                </div>
                                <UserList handleModal={toggleModal} />
                                {modal && (
                                    <Form
                                        userid={editUserID}
                                        closeModal={() => setModal(false)}
                                    />
                                )}
                            </>
                        }
                    />
                    <Route path="/view" element={<UserListView />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
