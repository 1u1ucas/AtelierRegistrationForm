import { useState } from 'react'
import Steps from './components/steps'
import Account from './components/account'
import PersonalInformation from './components/personalInformation';
import ProfileData from './components/profileData';

export interface User {
  accountType: number;
  name?: string;
  email?: string;
  password?: string;
  age?: string;
  interest?: string;
  bio?: string;
}




function App() {

  const [steps, setSteps] = useState(1);

  const [userData , setUserData] = useState<User>({
    accountType: 0,
    name: '',
    email: '',
    password: '',
    age: '',
    interest: '',
    bio: '',
  });

  const accountType ="";

  const handleNext = () => {
    setSteps(steps + 1);
  };

  const handlePrevious = () => {
    setSteps(steps - 1);
  };

  const updateUserData = (newData: Partial<typeof userData>) => {
    setUserData(prevData => ({ ...prevData, ...newData }));
  };


  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-200">
      <div className="flex flex-col items-center justify-center p-6 rounded-lg  max-w-md gap-10 bg-white">
        <div className="flex flex-col items-center  justify-start gap-4">
          <h1 className="font-bold text-3xl text-black">Registration Form</h1>
          <p className="text-black opacity-25">Please fill out this form with the required information</p>     
        </div>
        <Steps steps={steps}/>
        {
          steps === 1 ? <Account accountType={userData.accountType} setAccountType={(type) => updateUserData({ accountType: type })} /> : null
        }
        {
          steps === 2 ? <PersonalInformation /> : null
        }

        {
          steps === 3 ? <ProfileData /> : null
        }

        <div className='flex flex-row w-full items-end justify-end gap-2'>
          <button onClick={handlePrevious} className={`text-white bg-purple-400 p-2 rounded-md
            ${steps === 1 ? 'hidden' : 'block'}

            `}>
            <p>Previous</p>
          </button>
          <button onClick={handleNext} className="text-white bg-purple-400 p-2 rounded-md">
            <p>
              {steps === 3 ? 'Send' : 'Next'}
              </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
