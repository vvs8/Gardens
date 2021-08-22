import React from "react";
import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <div className="jumbotron">
            <h2 className="jumbotron-title">{title}</h2>
            <p className="jumbotron-desc">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;