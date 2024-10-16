function App() {

  return (
    <div className="flex items-center justify-center w-full">
    <div className="flex flex-col items-center justify-center h-screen max-w-md">
      <div className="flex flex-col items-center  justify-start">
        <h1>Registration Form</h1>
        <p>Please fill out this form with the required information</p>     
      </div>
      <div className="flex flex-row items-start justify-center text-center gap-10">
        <div className="flex flex-col flex-1">
          <p>1</p>
          <p>Account Type</p>
        </div>
        <div className="flex flex-col flex-1">
          <p>2</p>
          <p>Personal Information</p>
        </div>
        <div className="flex flex-col flex-1">
          <p>3</p>
          <p>Profile Data</p>
        </div>    
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <p>Chose your account type</p>
        <div>
          <div>
            <button>
              <div>
              <i className="fa-regular fa-address-card"></i>
              </div>
            </button>
            <div>
              <h3>Personnal Account</h3>
              <p>Get started with your account</p>
            </div>
          </div>
          <div>
            <button>
              <div>
              <i className="fa-regular fa-address-card"></i>
              </div>
            </button>
            <div>
              <h3>Business Account</h3>
              <p>Get started with your account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
