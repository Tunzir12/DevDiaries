const Home = () => {
  return (
    <div className='p-10'>
        <div className="grid grid-cols-4 text-white">
            {/**Jumbotron on homepage if not logged in */}
            <div className="col-span-3 text-left">
                <div className="p-20">
                <h1 className="text-5xl">Welcome to DevDiaries!</h1>
                <p className="text-xl">Here you can share your thoughts and stories on becoming a professional developer.</p>
                </div>

            </div>

            {/**register form with log in link */}
            <div className="col-span-1  bg-slate-200 bg-opacity-50">
                <div className="center p-4 text-center font-bold">
                    <h3>Create an Account!</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 p-6 text-black">
                    <div className="col-span-1">
                        <input type="text" name="fname" id="fname" placeholder="First Name" className="w-full" />
                    </div>
                    <div className="col-span-1">
                        <input type="text" name="lname" id="lname" placeholder="Last Name" className="w-full" />
                    </div>
                    <div className="col-span-2">
                        <input type="email" name="email" id="email" placeholder="Email" className=" w-full" />
                    </div>
                    <div className="col-span-2">
                        <input type="password" name="pass" id="pass" placeholder="Password" className="w-full" />
                    </div>
                    <div className="col-span-2">
                        <input type="password" name="cpass" id="cpass" placeholder="Confirm Password" className=" w-full" />
                    </div>
                    <div className="col-span-2 flex flex-row space-x-5">
                        <label htmlFor="birthdate">Date of birth:</label>
                        <input type="date" name="birthday" id="birthday" placeholder="Date of birth" className="w-auto"/>
                    </div>
                    <div className="col-span-2 space-x-5">
                        <label htmlFor="gender">Gender:</label>
                        <select name="gender" id="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                </div>
                <div className="btn p-6 text-center">
                    <button className="bg-cyan-700 p-2 w-1/2">Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home