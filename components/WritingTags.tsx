import Link from "next/link";
import { Fragment } from "react";
import { cleanString } from "../util/string";

const WritingTags = ({
    basePath,
    tags,
}: {
    basePath: string;
    tags: string[];
}) => {
    return (
        <div className="contents">
            {tags.map((tag, index) => (
                <Fragment key={index}>
                    <Link href={`/${basePath}/${cleanString(tag)}`} passHref>
                        <a className="text-pink-400 hover:text-pink-700 transition-colors duration-300">
                            {tag}
                        </a>
                    </Link>{" "}
                    <span>{index !== tags.length - 1 ? "·" : ""}</span>{" "}
                </Fragment>
            ))}
        </div>
    );
};

export default WritingTags;
