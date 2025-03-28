
import './App.css';
import { useState, useEffect } from 'react';
import DataList from './components/dataList.jsx'
import Form from './components/Form.jsx'


function App() {

  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [editUserID, setEditUserID] = useState(-1)


  useEffect(() => {
        fetch("http://localhost:8800/")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
    }, []);


  function toggleModal(userId) {
    setModal(!modal)
    setEditUserID(userId)
  }
  
  return (
    <div className="App">
      <h1>CRUD</h1>
        <button className="add-btn" type="button" onClick={() => toggleModal(-1)}>Adicionar</button>
      <DataList data={data} handleModal={toggleModal} />
      {modal && <Form userid={editUserID}/>}
      
    </div>
  );
}

export default App;
