import blogData from "../../data/main.js"
const Blog = () => {

    console.log(blogData);
    return (<>

        <h5>Das ist die Blog Page</h5>
        <section className="blogArticles">
            {blogData.map((postare, index) => {
                return (
                    <div className="blogArticle" key={index}>
                        <img src={postare.img_url} alt={postare.title} />
                        <h5>{postare.title}</h5>
                        <button>Read More</button>
                    </div>
                )
            })}
        </section>


    </>);
}

export default Blog;