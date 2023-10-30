import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {userService} from "./services/userService";
import {postService} from "./services/postService";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':userId', element: <PostsPage/>, loader: ({params:{userId}})=>postService.getByUserId(userId)}
                ]
            }
        ]
    }
]);

export {
    router
}