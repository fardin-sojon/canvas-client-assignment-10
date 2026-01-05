import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line 
} from "recharts";
import { Users, ImageIcon, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", users: 400, artworks: 240 },
  { name: "Feb", users: 300, artworks: 139 },
  { name: "Mar", users: 200, artworks: 980 },
  { name: "Apr", users: 278, artworks: 390 },
  { name: "May", users: 189, artworks: 480 },
  { name: "Jun", users: 239, artworks: 380 },
];

const categoryData = [
  { name: "Digital", value: 400 },
  { name: "Oil", value: 300 },
  { name: "Abstract", value: 300 },
  { name: "Sketch", value: 200 },
];

const COLORS = ["#7C3AED", "#2563EB", "#F43F5E", "#10B981"];

const DashboardHome = () => {
  const [stats, setStats] = React.useState({
    usersCount: 0,
    artworksCount: 0,
    revenue: 0,
    growth: 0
  });

  React.useEffect(() => {
    fetch("http://localhost:5000/admin-stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-base-content">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Users", value: stats.usersCount, icon: Users, color: "text-primary" },
          { title: "Total Artworks", value: stats.artworksCount, icon: ImageIcon, color: "text-secondary" },
          { title: "Revenue", value: `$${stats.revenue}`, icon: DollarSign, color: "text-accent" },
          { title: "Growth", value: `+${stats.growth}%`, icon: TrendingUp, color: "text-green-500" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-base-content/60">{stat.title}</p>
              <p className="text-3xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className={`p-4 rounded-xl bg-base-200 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200">
          <h2 className="text-xl font-bold mb-6">User & Artwork Growth</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="users" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                <Bar dataKey="artworks" fill="#2563EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution Chart */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200">
          <h2 className="text-xl font-bold mb-6">Category Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {categoryData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-sm text-base-content/70">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
