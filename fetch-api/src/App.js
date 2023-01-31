import { useEffect } from 'react';
import './App.css';
import { PostService, UserService } from './services'




function App() {
  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(4).then(res=>console.log(res))
    PostService.newPost({
      userId:3,
      title:'test',
      body:'test'
    }).then(res=>console.log(res))

    UserService.getUsers().then(res=>console.log(res))
  })

  return (
    <>
      App
    </>
  );
}

export default App;
