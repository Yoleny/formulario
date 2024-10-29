import React, { useState } from 'react';

interface Usuario {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
}


const Registro: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [formData, setFormData] = useState<Usuario>({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    fechaNacimiento: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calcularEdad = (fechaNacimiento: string) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const agregarUsuario = () => {
    setUsuarios([...usuarios, formData]);
    setFormData({ nombre: '', apellido: '', telefono: '', correo: '', fechaNacimiento: '' });
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarUsuario(); }}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>

      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.fechaNacimiento}</td>
              <td>{calcularEdad(usuario.fechaNacimiento)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registro;