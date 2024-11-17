import React from 'react';
import { Student } from '../types';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface StudentListProps {
  students: Student[];
  onMarkAttendance: (id: string, type: 'in' | 'out') => void;
}

export const StudentList: React.FC<StudentListProps> = ({ students, onMarkAttendance }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Out Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {student.isPresent ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="w-4 h-4 mr-1" /> Present
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <XCircle className="w-4 h-4 mr-1" /> Absent
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.inTime || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.outTime || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.totalHours ? (
                    <span className="inline-flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {student.totalHours.toFixed(2)}h
                    </span>
                  ) : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {!student.inTime ? (
                    <button
                      onClick={() => onMarkAttendance(student.id, 'in')}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Mark In
                    </button>
                  ) : !student.outTime ? (
                    <button
                      onClick={() => onMarkAttendance(student.id, 'out')}
                      className="text-red-600 hover:text-red-900"
                    >
                      Mark Out
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}