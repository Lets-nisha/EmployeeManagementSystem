import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  
  // ISSUE FIX: Added loading state to prevent black screen during initial data fetch
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ISSUE FIX: Wait for userData to be loaded from AuthProvider before checking login status
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      
      // ISSUE FIX: Check if loggedInUser exists AND is not an empty string
      // Previous issue: After logout, empty string ('') was stored, causing black screen on refresh
      if (loggedInUser && loggedInUser !== '' && loggedInUser !== '""') {
        try {
          const parsedUser = JSON.parse(loggedInUser);
          
          if (parsedUser.role) {
            setUser(parsedUser.role);
            
            if (parsedUser.role === "employee") {
              setLoggedInUserData(parsedUser.data);
            }
          }
        } catch (error) {
          // ISSUE FIX: Clear invalid data if JSON parsing fails
          localStorage.removeItem("loggedInUser");
        }
      }
      
      // ISSUE FIX: Set loading to false after checking login status
      setIsLoading(false);
    }
  }, [userData]); // ISSUE FIX: Added userData as dependency to ensure it's loaded first

  const handleLogin = (email, password) => {
    // ISSUE FIX: Changed comparison to use === instead of ==
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // ISSUE FIX: Show nothing while loading to prevent flash of wrong content
  if (isLoading) {
    return null;
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;