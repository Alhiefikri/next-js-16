const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-2xl">Navbar Dashboard</p>
      {children}
    </div>
  );
};

export default Layout;
