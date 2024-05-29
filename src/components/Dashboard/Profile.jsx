
const Profile = () => {
        
    return (
        <div className="my-5 flex flex-col gap-4">
            <section className="bg-white p-5 w-1/2 mx-auto rounded-md">
                <h1 className="text-3xl">Basic Info</h1>
                <span className="divider"></span>
                <div>
                    <p className="font-bold">Name: Rukonuzzaman</p>
                    <p className="font-bold">Birth: 20 may 2000</p>
                    <p className="font-bold">Gender: Male</p>
                </div>
            </section>
            <section className="bg-white p-5 w-1/2 mx-auto rounded-md">
                <h1 className="text-3xl">Contact Info</h1>
                <span className="divider"></span>
                <div>
                    <p className="font-bold">Email: rukonbds@rukon.com</p>
                    <p className="font-bold">Mobile: 01342184727</p>
                </div>
            </section>
            <section className="bg-white p-5 w-1/2 mx-auto rounded-md">
                <h1 className="text-3xl">Address</h1>
                <p>Jahangirnagar University, Savar, Dhaka, Bangladesh.</p>
            </section>
        </div>
    )
}
export default Profile;