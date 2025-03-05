export const ViewMoreButton = ({
  link,
  children,
}: {
  link: string;
  children: string;
}) => {
  return (
    <div className="view-more-button-wrapper">
      <a href={link} className="view-more-button transparent" type="button">
        {children}
      </a>
    </div>
  );
};
