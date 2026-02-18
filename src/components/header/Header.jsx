import React from 'react'
 
const Header = ({ data, changeUser }) => {

  const logOut = () => {
    // Show confirmation dialog before logout
    const confirmed = window.confirm("Are you sure you want to logout?");
    
    if (confirmed) {
      // ISSUE FIX: Remove the item completely instead of setting empty string
      // Previous issue: Setting empty string ('') caused problems on refresh
      localStorage.removeItem("loggedInUser");
      
      // ISSUE FIX: Set user to null instead of empty string
      // This properly resets the app state and shows login page
      changeUser(null);
    }
  }

  return (
    <>
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white'>
          Hello <br /> 
          <span className='text-3xl font-semibold'>
            {/* Display logged-in user's name dynamically */}
            {data?.firstName || 'Nisha'}
          </span> 
        </h1>
        <button 
          onClick={logOut} 
          className='bg-red-600 hover:bg-red-700 text-white py-2 px-5 text-lg font-medium rounded-sm transition-colors'
        >
          Log Out
        </button>
      </div>
    </>
  )
}

export default Header