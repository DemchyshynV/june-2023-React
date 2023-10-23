import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    const {reset, handleSubmit, register} = useForm();

    const save =async (post)=>{
        const {data} = await postService.create(post);
        setPosts(prev=>[...prev, data])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <input type="text" placeholder={'body'} {...register('address.house')}/>
            <input type="text" placeholder={'body'} {...register('address.street')}/>
            <button>save</button>
        </form>
    );
};

export {PostForm};