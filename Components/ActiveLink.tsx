import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ActiveLinkProps {
  to: string;
  children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
      {children}
    </Link>
  );
};

export default ActiveLink;