import type React from 'react';

type CandidateCardProps = {
  name: string;
  location: string;
  email: string;
  company: string;
  bio: string;
  avatar: string;
  html_url: string;
};

const CandidateCard = ({
    name,
    location,
    email,
    company,
    bio,
    avatar,
    html_url,
    }: CandidateCardProps) => {
    return (
        <div>
        <div className="card">
        <img src={avatar} alt={name} />
        <div className="card-body">
            <h2>{name}</h2>
            <p>{location}</p>
            <p>{email}</p>
            <p>{company}</p>
            <p>{bio}</p>
            <a href={html_url} target="_blank" rel="noreferrer">
            View Profile
            </a>
        </div>
        </div>
        <div className='icons'>
            <img src="minusSymbol.jpg" alt="minus" />
            <img src="plusSymbol.jpg" alt="plus" />
        </div>
        </div>
    );
    }

    export default CandidateCard;