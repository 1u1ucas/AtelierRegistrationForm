export interface User {
    accountType: number;
    name?: string;
    email?: string;
    password?: string;
    age?: string;
    interest?: string;
    bio?: string;
  }

interface PersonnalInformationProps {
    userData: User;
    setUserData: React.Dispatch<React.SetStateAction<User>>;

}

function PersonalInformation({ userData, setUserData}: PersonnalInformationProps) { 

      
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, name: event.target.value});
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, email: event.target.value});
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, password: event.target.value});
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
                      value={userData.name}
                      onChange={handleNameChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Email</label>
                    <input
                    id="Email"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="email"
                      value={userData.email}
                      onChange={handleEmailChange}
                      />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Password</label>
                    <input
                    id="Password"
                      className="bg-slate-200 w-full rounded-md h-8 px-4"
                      type="password"
                      value={userData.password}
                      onChange={handlePasswordChange}
                      />
                </div>
            </form>
        </div>
    )
}

export default PersonalInformation;