import {useState} from 'react';

function ProfileData() { 

    const [age, setAge] = useState('');
    const [interest, setInterest] = useState('');
    const [bio, setBio] = useState('');
      
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInterest(event.target.value);
    };

    const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
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
                      value={age}
                      onChange={handleAgeChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Area of interest</label>
                    <input
                    id="Interest"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={interest}
                      onChange={handleInterestChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Bio/Description</label>
                    <input
                    id="Bio"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={bio}
                      onChange={handleBioChange}
                      />
                </div>
            </form>
        </div>
    )
}

export default ProfileData;