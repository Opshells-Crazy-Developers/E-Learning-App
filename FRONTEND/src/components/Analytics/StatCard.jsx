import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

const StatCard= ({ title, value, icon: Icon, change, isPositive, isLoading = true })=> {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        {!isLoading && change !== undefined && (
          <span className={`flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
            {change}%
          </span>
        )}
      </div>
      <div className={`h-8 mb-1 ${isLoading ? 'animate-pulse bg-gray-200 rounded w-24' : ''}`}>
        {!isLoading && <h3 className="text-2xl font-bold">{value}</h3>}
      </div>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
}

export default StatCard;
