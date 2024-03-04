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
        className="flex flex-col justify-center items-center hover:cursor-pointer border shadow"
        onClick={handleClick}
    >
        <img className="h-65 w-60" alt="user image" src={user.avatar}/>
        <span>{`Name: ${user.first_name} ${user.last_name}`}</span>
        <span>{`Email: ${user.email}`}</span>
    </div>
  )
}

export default UserCard