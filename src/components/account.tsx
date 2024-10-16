import React, { useState } from 'react';

function Account(AccountType : any) {

    const [accountType, setAccountType] = useState(AccountType);

    const handlePersonalAccountClick = () => {
        setAccountType(1);
      };
    
      const handleBusinessAccountClick = () => {
        setAccountType(2);
        };


    return(
              <div className="flex flex-col items-start justify-center w-full gap-4">
        <p className="text-black opacity-25">Chose your account type</p>
        <div className="flex flex-col gap-10" >
          <div className="flex flex-row items-start justify-start gap-2">
            <button onClick={handlePersonalAccountClick}>
              <div className={`border-solid border-2 py-4 px-4 flex items-center justify-center rounded border-purple-400 ${
                accountType === 1 ? 'bg-purple-400' : 'bg-white'
              }`}>
              <i className={`fa-regular fa-address-card text-4xl ${
                  accountType === 1 ? 'text-white' : 'text-purple-400'
                }`}></i>
              </div>
            </button>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Personnal Account</h3>
              <p className="text-black opacity-25">Get started with your account</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-2">
            <button onClick={handleBusinessAccountClick}>
            <div className={`border-solid border-2 py-4 px-4 flex items-center justify-center rounded border-purple-400 ${
                accountType === 2 ? 'bg-purple-400' : 'bg-white'
              }`}>
              <i className={`fa-regular fa-address-card text-4xl ${
                  accountType === 2 ? 'text-white' : 'text-purple-400'
                }`}></i>
                </div>
            </button>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Business Account</h3>
              <p className="text-black opacity-25">Get started with your account</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Account;