import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Employee() {
  const { id } = useParams(); // Access the employee ID from the URL parameter
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee data from the server using Axios
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading employee...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <div>
        <strong>First Name:</strong> {employee.first_name}
      </div>
      <div>
        <strong>Last Name:</strong> {employee.last_name}
      </div>
      <div>
        <strong>Email:</strong> {employee.email}
      </div>
      <div>
        <strong>Mobile:</strong> {employee.mobile}
      </div>
      <div>
        <strong>Department:</strong> {employee.department}
      </div>
    </div>
  );
}

export default Employee;