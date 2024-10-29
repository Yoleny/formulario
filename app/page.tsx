"use client"; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from '@/Components/UserForm'; 
import ActiveLink from '@/Components/ActiveLink';
import UserTable from '@/Components/UserTable';



interface User {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nextId, setNextId] = useState(1); 

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers([...users, { ...user, id: nextId }]); 
    setNextId(nextId + 1); 
  };

  return (
    <Router>
      <nav>
        <ActiveLink to="/">Inicio</ActiveLink>
        <ActiveLink to="/registro">Registro</ActiveLink>
        <ActiveLink to="/UserTable">Tabla</ActiveLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Bienvenido</h1>} />
        <Route path="/registro" element={<UserForm onAddUser={addUser} />} />
        <Route path="/UserTable" element={<UserTable users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;
