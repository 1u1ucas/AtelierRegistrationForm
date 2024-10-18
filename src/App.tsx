import { useState } from 'react'
import Steps from './components/steps'
import Account from './components/account'
import PersonalInformation from './components/personalInformation';
import ProfileData from './components/profileData';
import RegistredAccount from './components/registredAccount';

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


  const handleNext = () => {

    if(steps === 1){
      if (userData.accountType < 1 || userData.accountType > 2)
        return(alert('vous devez choisir un type de compte'))
    }

    if(steps === 2){
      if(!/^[a-zA-Z\s]+$/.test(userData.name  || '')){
        return(alert('Le nom choisit est incorect'))
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email || '')) {
        return alert('L\'email est invalide');
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(userData.password || '')) {
        return alert('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre');
      }
    }

    if(steps === 3){
      if(!/^[0-9]{1,2}$/.test(userData.age || '')){
        return(alert('age incorect'))
      }
      if(!/^[a-zA-Z\s]+$/.test(userData.interest  || '')){
        return(alert('L\'interet choisi est incorect'))
      }
      if(!/^[a-zA-Z0-9\s]+$/.test(userData.bio  || '')){
        return(alert('La description est incorect'))
      }

    }

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
      {
      steps > 3 ? <RegistredAccount userData={userData}/> :
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
          steps === 2 ? <PersonalInformation userData={userData} setUserData={setUserData} /> : null
        }

        {
          steps === 3 ? <ProfileData userData={userData} setUserData={setUserData} /> : null
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
    }
    </div>
  )
}

export default App
