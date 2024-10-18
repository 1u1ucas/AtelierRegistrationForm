

export interface User {
    accountType: number;
    name?: string;
    email?: string;
    password?: string;
    age?: string;
    interest?: string;
    bio?: string;
  }

interface registredAccountProps {
    userData: User;

}

function RegistredAccount({userData}: registredAccountProps){




    return(
        <div className="flex flex-col items-center justify-center gap-14">
            <div className="rounded-full bg-green-500 w-48 h-48 flex items-center justify-center">
                <i className="fa fa-check text-white text-8xl"></i>
            </div>
            <div className="flex flex-col items-center font-bold">
                <p className="">Congrats {userData.name}</p>
                <p>registration succesful</p>
                <p>Email confirmation sent to {userData.email}</p>
            </div>
        </div>

    )
}

export default RegistredAccount