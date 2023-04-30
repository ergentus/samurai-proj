import React, {createRef} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {MyPostsPropsType} from './MyPostsContainer'


const MyPosts = (props: MyPostsPropsType): JSX.Element => {
	const postsElements = props.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

	let newPostElement = createRef<HTMLTextAreaElement>()

	const addPostHandler = () => {
		props.addPost()
		props.updatePostTextArea('')
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
					<textarea ref={newPostElement}
								 onChange={onChangeTextAreaHandler}
								 value={props.profilePage.newPostText}/>
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