import { Link,} from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  
  return (
    // This comment is using React syntax to render HTML elements
    // The code below is the navigation bar that will be displayed on the top of the page
    // The navigation bar will have two links: Home and Potential Candidates
    // The Home link will take the user to the Home page  and the Potential Candidates link will take the user to the Potential Candidates page
    <div className="nav">Nav
      <h2 className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </h2>
      <h2 className="nav-item">
        <Link className="nav-link" to='/SavedCandidates'>Potential Candidates</Link>
      </h2>
    </div>
  )
};

export default Nav;
