import React, {createRef} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {DataPostType} from '../../../redux/store'


type MyPostsProps = {
	posts: DataPostType[]
	newTextValue: string
	updatePostTextArea: (text: string) => void
	addPost: () => void
}



const MyPosts = (props: MyPostsProps): JSX.Element => {
	const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

	let newPostElement = createRef<HTMLTextAreaElement>()

	const addPostHandler = () => {
		props.addPost()
	}

	const onChangeTextAreaHandler = () => {
		const text = newPostElement.current!.value
		props.updatePostTextArea(text)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div className={s.new}>
				<div>
					<textarea ref={newPostElement} onChange={onChangeTextAreaHandler} value={props.newTextValue}/>
				</div>
				<div>
					<button onClick={addPostHandler}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;