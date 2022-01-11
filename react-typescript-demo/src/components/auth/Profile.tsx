
export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
    return <>Private Profile component. Name is {name}</>
}