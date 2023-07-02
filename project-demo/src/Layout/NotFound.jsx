import { NavLink } from "react-router-dom";

const NotFound = () => {
   return (
      <div
         className="not-found"
         style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
         }}
      >
         <img
            src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
            alt="not-found"
         />
         <NavLink
            to="/"
            className="link-home"
            style={{ padding: "10px 20px", backgroundColor: "orange", borderRadius: "10px" }}
         >
            Go Home
         </NavLink>
      </div>
   );
};

export default NotFound;
