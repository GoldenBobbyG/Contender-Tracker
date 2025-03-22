import { Link,} from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  
  return (
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
