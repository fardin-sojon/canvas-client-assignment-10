import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { LayoutDashboard, Users, User, Heart, Menu, X, LogOut, Settings, PlusCircle, Image } from "lucide-react";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";
import logo from "../assets/logo.png";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, signOutUser } = use(AuthContext);
  const [role, setRole] = useState("user");

  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((data) => {
          const loggedInUser = data.find(u => u.email?.toLowerCase() === user?.email?.toLowerCase());
          if (loggedInUser) {
            setRole(loggedInUser.role);
          }
        });
    }
  }, [user]);

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard, role: "all" },
    { name: "All Users", href: "/dashboard/all-users", icon: Users, role: "admin" },
    { name: "Manage Artworks", href: "/dashboard/manage-artworks", icon: Settings, role: "admin" },
    { name: "Add Artwork", href: "/dashboard/add-artwork", icon: PlusCircle, role: "all" },
    { name: "My Gallery", href: "/dashboard/my-gallery", icon: Image, role: "all" },
    { name: "My Favorites", href: "/dashboard/my-favorites", icon: Heart, role: "all" },
    { name: "My Profile", href: "/dashboard/profile", icon: User, role: "all" },
  ];

  const filteredNav = navigation.filter(
    (item) => item.role === "all" || item.role === role
  );

  return (
    <div className="min-h-screen bg-base-100 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-base-200 border-r border-base-300">
        <div className="h-16 flex items-center justify-center border-b border-base-300">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-primary">
              Canvas
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {filteredNav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                location.pathname === item.href
                  ? "bg-primary text-white shadow-md"
                  : "text-base-content hover:bg-base-300"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-base-300">
          <div className="flex items-center gap-3 mb-4">
             <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://i.pravatar.cc/150?img=3"} alt="User" />
                </div>
             </div>
             <div>
                <p className="text-sm font-bold truncate w-32">{user?.displayName}</p>
                <p className="text-xs text-base-content/60 truncate w-32">{user?.email}</p>
             </div>
          </div>
          <button 
            onClick={() => signOutUser()} 
            className="btn btn-outline btn-error btn-sm w-full flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar & Header */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="h-16 lg:hidden bg-base-100 border-b border-base-300 flex items-center justify-between px-4">
           <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-primary">
              Canvas
            </span>
          </Link>
           <button onClick={() => setIsSidebarOpen(true)} className="btn btn-ghost btn-circle">
             <Menu size={24} />
           </button>
        </header>

        {/* Mobile Drawer */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)}></div>
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-base-100 shadow-xl p-4 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                 <span className="text-xl font-bold text-primary">Menu</span>
                 <button onClick={() => setIsSidebarOpen(false)} className="btn btn-ghost btn-circle btn-sm">
                   <X size={20} />
                 </button>
               </div>
               <nav className="flex-1 space-y-1">
                {filteredNav.map((item) => (
                    <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                        location.pathname === item.href
                        ? "bg-primary text-white"
                        : "text-base-content hover:bg-base-200"
                    }`}
                    >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                    </Link>
                ))}
               </nav>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-base-100 border-b border-base-200">
           <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
             {role === 'admin' ? 'Canvas Admin Panel' : 'Canvas User Dashboard'}
           </h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-base-100">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
