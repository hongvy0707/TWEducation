import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
  console.log({ error });
  
  return (
    <div>
        <body class="body-error">
        <h1 class="header-error">404</h1>
        <p class="error">Oops! Something is wrong.</p>
        <a class="button1" href="#">
            <Link to={"."}>
            <i class="icon-home">Go Back Home</i>
            </Link>
        </a>
        </body>
    </div>
    
  );
}