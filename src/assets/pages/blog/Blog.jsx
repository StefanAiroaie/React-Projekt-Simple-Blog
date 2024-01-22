import blogData from "../../data/main.js"
const Blog = () => {

    console.log(blogData);
    return (<>

        <h5>Das ist die Blog Page</h5>
        {blogData.map((postare, index) => {
            return (
                <div key={index}>
                    <h5>{postare.title}</h5>
                    

                </div>
            )
        })}


    </>);
}

export default Blog;