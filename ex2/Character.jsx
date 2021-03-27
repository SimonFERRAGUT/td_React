const Character = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <p>{props.job}</p>
        <p>{props.isInPrison ? "Is in prison" : "Is not in prison"}</p>
        
    </div>
);

export default Character;
