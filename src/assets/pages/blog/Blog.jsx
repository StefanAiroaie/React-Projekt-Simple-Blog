import blogData from "../../data/main.js"
import { Link } from "react-router-dom";
const Blog = ({ id }) => {

    console.log(blogData);
    return (<>

        <h5>Das ist die Blog Page</h5>
        <section className="blogArticles">
            {blogData.map((postare, index) => {
                return (
                    <div className="blogArticle" key={index}>
                        <img src={postare.img_url} alt={postare.title} />
                        <h5>{postare.title}</h5>
                        <Link to={`/blog/${postare.id}`}><button>Read More</button></Link>
                    </div>
                )
            })}
        </section>


    </>);
}

export default Blog;