import {useState} from 'react';

export interface User {
    accountType: number;
    name?: string;
    email?: string;
    password?: string;
    age?: string;
    interest?: string;
    bio?: string;
  }

interface ProfilDataProps {
    userData: User;
    setUserData: React.Dispatch<React.SetStateAction<User>>;

}

function ProfileData({ userData, setUserData}: ProfilDataProps) { 


      
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, age: event.target.value});
    };

    const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, interest: event.target.value});
    };

    const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, bio: event.target.value});
    }


    
    return (
        <div className="flex flex-col items-start justify-center w-full gap-4">
            <form className="flex flex-col w-full gap-4" action=''>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Age</label>
                    <input
                    id="Age"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={userData.age}
                      onChange={handleAgeChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Area of interest</label>
                    <input
                    id="Interest"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={userData.interest}
                      onChange={handleInterestChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Bio/Description</label>
                    <input
                    id="Bio"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={userData.bio}
                      onChange={handleBioChange}
                      />
                </div>
            </form>
        </div>
    )
}

export default ProfileData;