import {useState} from 'react';

function PersonalInformation() { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    
    return (
        <div className="flex flex-col items-start justify-center w-full gap-4">
            <form className="flex flex-col w-full gap-4" action=''>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Name</label>
                    <input
                    id="name"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Email</label>
                    <input
                    id="Email"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Password</label>
                    <input
                    id="Password"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      />
                </div>
            </form>
        </div>
    )
}

export default PersonalInformation;