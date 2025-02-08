import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCards from "../components/common/StatCards";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards
            name="Total Sales"
            icon={Zap}
            value="$12,123"
            color="#6366F1"
          />
          <StatCards
            name="New Users"
            icon={Users}
            value="1234"
            color="#8B5CF6"
          />
          <StatCards
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCards
            name="Conversion Rate"
            icon={BarChart2}
            value="12.3%"
            color="#10B981"
          />
        </motion.div>

        {/* Charts */}
        <div className=" gap-8 grid grid-cols-1 lg:grid-cols-2">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
