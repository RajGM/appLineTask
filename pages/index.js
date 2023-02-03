import styles from '../styles/Home.module.css'
import ImageUploader from '@components/ImageUploader';
import ImageFeed from '@components/ImageFeed';
import { firestore} from '@lib/firebase';

import { useState } from 'react';

// Max post to query per page
//const LIMIT = 10;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('listData')
    
  const posts = (await postsQuery.get()).docs.map((doc) => doc.data());
  console.log(posts);
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  //console.log(posts)

  return (
    <div className={styles.container}>
      <ImageUploader />
      <ImageFeed posts={posts}/>
    </div>
  )
}
