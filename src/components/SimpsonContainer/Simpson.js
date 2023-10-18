const Simpson = ({simpson}) => {
    const {id, name, img} = simpson;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Simpson};