import "../../style/RightBar.css";

// const blogPosts = [
//   {
//     id: 1,
//     type: "overflow",
//     news: "Remote work is killing big offices. Cities must change to survive",
//   },
//   {
//     id: 2,
//     type: "featured",
//     news: "Temporary policy: GPT is banned",
//   },
// ];

export default function RightBar() {
  let blogNews = [];
  // let featuredNews = [];
  // function filterPosts() {
  //   let postType = blogPosts.map((post) => {
  //     if (post.type === "featured") {
  //       blogNews.push(post.news);
        
  //     } else {
  //       featuredNews.push(post.news);
  //     }
  //     console.log(blogNews);
  //     console.log(featuredNews);
  //   });
  // }
  return (
    <aside>
      <h4>Overflow Blog</h4>
      <ul>
        {blogNews.map((one) => (
          <li key={blogNews.indexOf(one)}>{one}</li>
        ))}
      </ul>
      <h4>Featured on Meta</h4>
      <ul>
        {/* {featuredNews.map((oneNews, index) => (
          <li key={index}>{oneNews}</li>
        ))} */}
      </ul>
    </aside>
  );
}
