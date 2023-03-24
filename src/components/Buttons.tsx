"use client";
type Props = {
  Title: string;
  Icon: React.ElementType;
};
export default function Buttons({ Title, Icon }: Props) {
  return (
    <div className="flex chatRow">
      <Icon className="w-4 h-4" />
      <h2>{Title}</h2>
    </div>
  );
}
