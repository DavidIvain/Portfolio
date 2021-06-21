import "./avatar.scss";

export const AVATAR_CLASSNAME = "avatar";

export type AvatarProps = {
    src: string;
    alt: string;
    size: number;
} & typeof defaultProps;

const defaultProps = {
    size: 128,
};

export const Avatar = (props: AvatarProps) => <img src={props.src} alt={props.alt} style={{ width: props.size, height: props.size }} className={AVATAR_CLASSNAME} />;
Avatar.defaultProps = defaultProps;