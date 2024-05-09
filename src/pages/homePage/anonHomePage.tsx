import React from "react";
import getPosts from "../../functions/getPosts.ts";
import PostView from "../../components/postView.tsx";

const HomePage = (): React.JSX.Element => {

    let posts = getPosts();

    let postsView =
        <>
            {posts.map(
                (p: Post) => { return PostView(p) }
            )}
        </>

    return (
        <div>
            {postsView}
            <a href="./user/person"> userPage </a>
        </div>
    )
}

export default HomePage;