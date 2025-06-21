const Contact = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold m-4 p-4">Contact Us</h1>

            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-slate-100 rounded-lg">
                    Submit
                </button>
            </form>
            
        </div>
    );
};

export default Contact;