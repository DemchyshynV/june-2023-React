import {A} from "./components/A";
import {useAppContext} from "./hooks/useAppContext";


const App = () => {
    let value = useAppContext();
    return (
        <div>
            <A/>
        </div>
    );
};

export {
    App
};

// import {MyComponent} from "./components/MyComponent";
//
// const App = () => {
//     return (
//         <div>
//             <MyComponent>
//                 <h1>Hello</h1>
//             </MyComponent>
//         </div>
//     );
// };
//
// export {App};