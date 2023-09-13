import React, { useState } from 'react';
import './estilos.css';

const Lista = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Camaron', content: '' },
    { id: 2, name: 'Pescado', content: '' },
    { id: 3, name: 'Pulpo', content: '' },
    { id: 4, name: 'Molida', content: '' },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemContent, setNewItemContent] = useState('');

  const handleNameChange = (id, event) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: event.target.value } : item
    );
    setItems(updatedItems);
  };

  const handleContentChange = (id, event) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, content: event.target.value } : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    if (newItemName.trim() === '') {
      return; // Evita agregar elementos sin nombre
    }

    const newItem = {
      id: Date.now(),
      name: newItemName,
      content: newItemContent,
    };
    setItems([...items, newItem]);
    setNewItemName('');
    setNewItemContent('');
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className='lista-container'>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleNameChange(item.id, e)}
            />
            <input
              type="text"
              placeholder="Contenido en Stock"
              value={item.content}
              onChange={(e) => handleContentChange(item.id, e)}
            />
            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contenido en stock"
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
      />
      <button onClick={handleAddItem}>Agregar Producto</button>
    </div>
  );
};

export default Lista;