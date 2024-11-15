
const Home = () => {
  return (
    <div className='h-screen bg-sky-600'>
        <div className="grid grid-cols-4 p-10">
            {/**Jumbotron on homepage if not logged in */}
            <div className="col-span-3 text-left">
                <h1 className="text-3xl">Welcome to DevDiaries!</h1>
                <p className="text-lg">Here you can share your thoughts and stories on becoming a professional developer.</p>
            </div>

            {/**register form with log in link */}
            <div className="col-span-1">
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 space-y-2">
                        <label htmlFor="FirstName:">First Name</label>
                        <input type="text" name="fname" id="fname" className="rounded-lg w-auto" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="LastName:">Last Name</label>
                        <input type="text" name="fname" id="lname" className="rounded-lg w-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home