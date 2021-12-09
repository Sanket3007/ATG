import "./post.css";

export default function Post() {
    return (
        <div className="article">
            <img src="assets/img/article.png" alt="" className="articleImg" />

            <div className="articleinfo">
                <img src="assets/img/articleTopic.png" alt="" className="articleTopic" />
                <h3 className="articleTitle">What if famous brands had regular fonts? Meet <br /> RegulaBrands!</h3>
                <p className="articleDescp">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            </div>

            <div className="articleUserInfo">
                <img src="assets/img/articlelogo.png" alt="" className="articleUserLogo" />
                <h4 className="articleUserName">Sarthak Kamra</h4>

                <i class=" articleEye far fa-eye"></i>
                <h5 className="articleView">1.4k views</h5>
                <i class=" articleShare fas fa-share-alt-square"></i>
            </div>
        </div>
    )
}
