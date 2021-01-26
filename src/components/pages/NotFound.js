import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection.css';
import './NotFound.css';

function NotFound() {
  return (
      <>
      <div className="container">
          <div className="description-container">
              <h1>404 - Not Found!</h1>

              <div className="description-second">
                  <h2>Wygląda na to, że zabłądziłeś!</h2>
                    <Link to="/" className="redirect-to-homepage">
                      <p className="redirect-to-homepage">Powrót na stronę główną</p>
                    </Link>
              </div>
          </div>
      </div>
      </>
  )
}

export default NotFound