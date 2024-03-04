import React from 'react'
import {UserCardProps} from "../interface/UserCardProps";
import { useNavigate } from 'react-router-dom';


const UserCard: React.FC<UserCardProps> = ({user}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.id}`)
  }

  return (
    <div 
        className="user_profile"
        onClick={handleClick}
    >
        <img 
            className="user_image"
            alt="user image" 
            src={user.avatar}
        />
        <span className="mt-2 text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</span>
        <span className="text-gray-600">{user.email}</span>
    </div>
  )
}

export default UserCard