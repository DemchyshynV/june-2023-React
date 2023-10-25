import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            // {
            //     path: 'users', element: <UsersPage/>, children: [
            //         {path: 'posts', element: <PostsPage/>}
            //     ]
            // },
            {path: 'users', element: <UsersPage/>},
            {path: 'users/posts', element: <PostsPage/>},

            {path: 'comments', element: <CommentsPage/>}
        ]
    },
]);


export {
    router
}