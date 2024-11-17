import React from 'react';
import { Users, Clock, UserCheck } from 'lucide-react';

interface DashboardStatsProps {
  totalStudents: number;
  presentStudents: number;
  averageHours: number;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalStudents,
  presentStudents,
  averageHours,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Students</p>
            <p className="text-2xl font-semibold text-gray-900">{totalStudents}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-full">
            <UserCheck className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Present Today</p>
            <p className="text-2xl font-semibold text-gray-900">{presentStudents}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-full">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Average Hours</p>
            <p className="text-2xl font-semibold text-gray-900">{averageHours.toFixed(1)}h</p>
          </div>
        </div>
      </div>
    </div>
  );
}