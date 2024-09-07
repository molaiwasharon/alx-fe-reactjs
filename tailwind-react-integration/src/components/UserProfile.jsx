import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="container mx-auto sm:p-4 sm:p-6 md:p-8 lg:p-12 max-w-xs md:max-w-sm lg:max-w-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
          {user.name}
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-xl mt-2 text-center">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
