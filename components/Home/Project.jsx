import Image from "next/image";

const Project = ({title, description, image}) => {
    return (
        <article>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="image-container">
                <Image src={image} alt={title} layout="fill" />
            </div>
        </article>
    )
}

export default Project;