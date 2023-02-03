export default function ImageFeed({ posts}) {
    console.log(posts)
    return posts ? posts.map((post) => <ImageItem post={post} key={post} />) : null;
}

function ImageItem({post}) {
  console.log(post)
    return (
  
          <>
            <Image></Image>
          </>
        
    );
  }
  