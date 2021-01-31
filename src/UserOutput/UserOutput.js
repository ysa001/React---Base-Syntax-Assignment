import './UserOutput.css';

const UserOutput = ( props ) => {
    return(
        <div className="card">
            <h3> { props.username } </h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        </div>
    )
}

export default UserOutput;