

function Steps(steps: any) {

    return(
        <div className="flex flex-row items-start justify-center text-center gap-10">
        <div className="flex flex-col flex-1 items-center gap-2">
          <p className={`rounded-full bg-purple-400 border-purple-400 border-2 w-8 h-8 flex items-center justify-center text-base font-medium
            ${
                steps.steps === 1 ? 'bg-purple-400 border-purple-400 text-white opacity-100 ' : 'bg-white border-black opacity-25 text-purple-400'
            }
            `}>1</p>
          <p className="text-black opacity-25">Account Type</p>
        </div>
        <div className="flex flex-col flex-1 items-center gap-2">
          <p className={`rounded-full bg-purple-400 border-purple-400 border-2 w-8 h-8 flex items-center justify-center  text-base font-medium
            ${
                steps.steps === 2 ? 'bg-purple-400 border-purple-400 text-white opacity-100 ' : 'bg-white border-black opacity-25 text-purple-400'
            }
            `}>2</p>
          <p className="text-black opacity-25">Personal Information</p>
        </div>
        <div className="flex flex-col flex-1 items-center gap-2">
          <p className={`rounded-full bg-purple-400 border-purple-400 border-2 w-8 h-8 flex items-center justify-center text-base font-medium
            ${
                steps.steps === 3 ? 'bg-purple-400 border-purple-400 text-white opacity-100 ' : 'bg-white border-black opacity-25 text-purple-400'
            }
            `}>3</p>
          <p className="text-black opacity-25">Profile Data</p>
        </div>    
      </div>
    )
}

export default Steps;