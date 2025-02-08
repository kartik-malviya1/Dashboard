import { motion } from "framer-motion";

interface StatCardsProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  color: string;
}
const StatCards = ({ name, icon: Icon, value, color }: StatCardsProps) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 10px 18px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon height={20} width={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-2 text-3xl font-medium text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCards;
