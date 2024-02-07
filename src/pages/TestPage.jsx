import React from 'react'
import postsAxios from '../axios/posts'
import commentsAxios from '../axios/comments'


export default function TestPage() {

    const hadleGetPostsButtonClick = async () => {
        const response = await postsAxios.get()
        console.log("response", response)
    }

    const hadleGetCommentsButtonClick = async () => {
        try{
        const { data } = await commentsAxios.get()
        console.log(data)

        } catch(err){
            console.log(err)
        }

    }
  return (
    <div>
        <h1>테스트페이지</h1>
        <p>api 테스트를 진행합니다</p>
        <button onClick={hadleGetPostsButtonClick}
        >posts 데이터 가져오기(로그인 불필요)</button>
        <button onClick={hadleGetCommentsButtonClick}>comments 데이터 가져오기(로그인 필요)</button>
    </div>
  )
}
