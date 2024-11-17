const Home = () => {
  return (
    <div className='p-10'>
        <div className="grid grid-cols-4 text-white">
            {/**Jumbotron on homepage if not logged in */}
            <div className="col-span-3 text-left">
                <h1 className="text-3xl">Welcome to DevDiaries!</h1>
                <p className="text-lg">Here you can share your thoughts and stories on becoming a professional developer.</p>
            </div>

            {/**register form with log in link */}
            <div className="col-span-1">
                <div className="center">
                    <h3>Create an Account!</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 bg-sky-700">
                    <div className="col-span-1">
                        <input type="text" name="fname" id="fname" placeholder="First Name" className="rounded-lg w-auto" />
                    </div>
                    <div className="col-span-1">
                        <input type="text" name="lname" id="lname" placeholder="Last Name" className="rounded-lg w-auto" />
                    </div>
                    <div className="col-span-2">
                        <input type="email" name="email" id="email" placeholder="Email" className="rounded-lg w-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home