import { Link, useParams } from "react-router-dom";
import blogData from "../../data/main.js"
const BlogArticle = () => {

    const idulArticolului = useParams();
    console.log(blogData);

    const blogArticle = blogData.filter((articlolul) => {
        console.log("aici ", articlolul.id);
        return articlolul.id === Number(idulArticolului.id)

    })

    console.log("aici este userparams", idulArticolului)
    console.log("aici este blogArticle", blogArticle)

    // console.log("aici este id blog article", blogArticle);
    return (
        <>
            <h5>Das ist die Blog Article Page</h5>
            <div className="blogArticle">
                <h3>{blogArticle[0].title}</h3>
                <img src={blogArticle[0].img_url} alt={blogArticle[0].title} />
                <p>{blogArticle[0].published_date}</p>
                <h6>{blogArticle[0].author}</h6>
                <p>{blogArticle[0].description}</p>
                <Link to="/blog"><button>Back to Blog</button></Link>
            </div>



        </>
    );
}

export default BlogArticle