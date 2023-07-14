import LocationIcon from "@/components/Icons/LocationIcon";

interface Props {
  href: string;
  text: string;
}

const UserCardSocial = ({ href, text }: Props) => {
  return (
    <article className="space-x-2">
      <i>
        <LocationIcon className="h-full w-full fill-white" width={"1rem"} />
      </i>
      <a href={href}>{text}</a>
    </article>
  );
};
export default UserCardSocial;
