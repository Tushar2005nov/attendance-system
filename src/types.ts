export interface Student {
  id: string;
  name: string;
  inTime?: string;
  outTime?: string;
  totalHours?: number;
  isPresent: boolean;
}

export interface AttendanceRecord {
  date: string;
  id: string;
  name: string;
  inTime: string;
  outTime: string;
  totalHours: number;
}