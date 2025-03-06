export const ViewMoreButton = ({
  link,
  children,
  type,
}: {
  link?: string;
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <div className="view-more-button-wrapper">
      {link ? (
        <a
          href={link}
          className="view-more-button transparent"
          type={type ? type : "button"}
        >
          {children}
        </a>
      ) : (
        <button
          className="view-more-button transparent"
          type={type ? type : "button"}
        >
          {children}
        </button>
      )}
    </div>
  );
};
