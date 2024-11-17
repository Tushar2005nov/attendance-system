import React from 'react';
import { Clock, Users } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Jetking Institute</h1>
              <p className="text-indigo-200">Attendance Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="font-medium">Admin Portal</span>
          </div>
        </div>
      </div>
    </header>
  );
}