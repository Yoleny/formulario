
import React, { useState } from 'react';


interface User {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
}

interface UserFormProps {
  onAddUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => { 
  const [formData, setFormData] = useState<User>({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    fechaNacimiento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddUser(formData); 
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fechaNacimiento: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
      <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
      <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
      <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default UserForm;
