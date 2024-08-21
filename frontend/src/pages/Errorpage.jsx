import { NavLink } from "react-router-dom";

function Errorpage() {
  return (
    <>

      <section className="bg-cyan-950 h-[100vh]">
        <div className=" content text-neutral-100 text-center">
          <h2 className="header text-9xl font-bold text-teal-500">404</h2>
          <h4 className="text-4xl font-bold my-8">Sorry! Page not found</h4>
          <p className="text-2xl font-bold">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns mt-8">
            <NavLink to="/" className={"text-xl font-bold text-cyan-600"}>return home</NavLink>
            
          </div>
        </div>
      </section>
   

    </>
  )
}

export default Errorpage