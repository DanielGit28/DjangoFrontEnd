'use client';
import EmployeeList from "./components/Employees";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmployeeList />
    </main>
  );
}
