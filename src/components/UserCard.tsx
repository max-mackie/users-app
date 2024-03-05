import React from 'react';
import { UserCardProps } from "../interface/UserCardProps";
import { useNavigate } from 'react-router-dom';

// Defines a component to display a user's profile card.
// Accepts user details as props and navigates to the user's detail page on click.
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  // Handler for navigating to the user's detailed view.
  const handleClick = () => navigate(`/user/${user.id}`);

  return (
    // User profile card container
    <div className="user_profile" onClick={handleClick}>
      <img
        className="user_image"
        alt="user profile"
        src={user.avatar}
      />
      <span className="mt-2 text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</span>
      <span className="text-gray-600">{user.email}</span>
    </div>
  );
}

export default UserCard;