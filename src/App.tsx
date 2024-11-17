import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Header } from './components/Header';
import { StudentList } from './components/StudentList';
import { DashboardStats } from './components/Dashboard';
import { Student } from './types';

function App() {
  const [students, setStudents] = useState<Student[]>([
    { id: "JK001", name: "Gopal", isPresent: false },
    { id: "JK002", name: "Abhishek", isPresent: false },
    { id: "JK003", name: "Tushar", isPresent: false },
    { id: "JK004", name: "Akshay", isPresent: false },
    { id: "JK005", name: "Aman", isPresent: false },
    { id: "JK006", name: "Amit", isPresent: false },
  ]);

  const handleMarkAttendance = (id: string, type: 'in' | 'out') => {
    const currentTime = format(new Date(), 'HH:mm:ss');
    
    setStudents(prevStudents => prevStudents.map(student => {
      if (student.id === id) {
        if (type === 'in') {
          return { ...student, inTime: currentTime, isPresent: true };
        } else {
          const inTime = new Date(`2000/01/01 ${student.inTime}`);
          const outTime = new Date(`2000/01/01 ${currentTime}`);
          const diff = (outTime.getTime() - inTime.getTime()) / (1000 * 60 * 60);
          return { ...student, outTime: currentTime, totalHours: diff };
        }
      }
      return student;
    }));
  };

  const calculateStats = () => {
    const presentCount = students.filter(s => s.isPresent).length;
    const studentsWithHours = students.filter(s => s.totalHours);
    const avgHours = studentsWithHours.length
      ? studentsWithHours.reduce((acc, curr) => acc + (curr.totalHours || 0), 0) / studentsWithHours.length
      : 0;

    return {
      totalStudents: students.length,
      presentStudents: presentCount,
      averageHours: avgHours,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <DashboardStats {...calculateStats()} />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Student Attendance</h2>
            <div className="text-sm text-gray-500">
              {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </div>
          </div>
          
          <StudentList 
            students={students}
            onMarkAttendance={handleMarkAttendance}
          />
        </div>
      </main>
    </div>
  );
}

export default App;