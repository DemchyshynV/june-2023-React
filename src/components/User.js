import './Users.css'
const User = ({user}) => {
    // console.log(props);
    const {name} = user;

    return (
        <div className={"asd"}>
            <div>name: {name}</div>
        </div>
    );
};

export {User};